package com.ananth.pyqbank;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.net.Uri;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * Live update: keeps the app's site content in step with https://s7-ai-pyq-bank.vercel.app without a new APK.
 *
 * The site publishes app/update.json (made by android/tools/make_web.py --site): every file the app uses
 * (index.html, fonts, PDFs) with its SHA-1 and URL. The APK carries the same manifest for its bundled copy.
 * When the online version differs, only changed files are downloaded into files/stage, checked against their
 * SHA-1, and swapped into files/live in one rename. The app then loads files/live/index.html; PDFs come from
 * files/live when a newer copy was downloaded, otherwise from the APK. Installing a newer APK clears files/live.
 */
final class Updater {
    static final String SITE = "https://s7-ai-pyq-bank.vercel.app/";
    static final String MANIFEST = "app/update.json";
    static final long MIN_GAP_MS = 30L * 60 * 1000;

    private static final AtomicBoolean RUNNING = new AtomicBoolean(false);
    private static long lastCheck;

    interface Listener {
        void updated();
    }

    static File live(Context c) {
        return new File(c.getFilesDir(), "live");
    }

    static File stage(Context c) {
        return new File(c.getFilesDir(), "stage");
    }

    static boolean hasLive(Context c) {
        File d = live(c);
        return new File(d, "index.html").isFile() && new File(d, "update.json").isFile();
    }

    /** file:///data/user/0/com.ananth.pyqbank/files/live/ */
    static String liveBase(Context c) {
        return Uri.fromFile(live(c)).toString() + "/";
    }

    /** Opens a www file: the downloaded copy if there is one, else the copy bundled in the APK. */
    static InputStream open(Context c, String name) throws IOException {
        File f = new File(live(c), name);
        if (hasLive(c) && f.isFile()) return new FileInputStream(f);
        return c.getAssets().open(MainActivity.WWW + name);
    }

    static boolean exists(Context c, String name) {
        try {
            open(c, name).close();
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /** A newer APK carries newer content: drop anything downloaded for the old one. */
    static void checkApk(Context c) {
        int code = 0;
        try {
            PackageInfo pi = c.getPackageManager().getPackageInfo(c.getPackageName(), 0);
            code = pi.versionCode;
        } catch (Exception ignored) {
        }
        SharedPreferences p = c.getSharedPreferences("update", Context.MODE_PRIVATE);
        if (p.getInt("apk", -1) != code) {
            deleteTree(live(c));
            deleteTree(stage(c));
            clearPdfCache(c);
            p.edit().putInt("apk", code).apply();
        }
    }

    /** Starts a background check unless one ran in the last 30 minutes (force = ignore the gap). */
    static void checkAsync(final Context app, final boolean force, final Listener l) {
        long now = System.currentTimeMillis();
        if (!force && now - lastCheck < MIN_GAP_MS) return;
        if (!RUNNING.compareAndSet(false, true)) return;
        lastCheck = now;
        new Thread(new Runnable() {
            @Override
            public void run() {
                boolean changed = false;
                try {
                    changed = update(app);
                } catch (Throwable ignored) {
                    deleteTree(stage(app));
                } finally {
                    RUNNING.set(false);
                }
                if (changed && l != null) l.updated();
            }
        }, "pyq-update").start();
    }

    /** Returns true when newer content was installed into files/live. */
    static boolean update(Context c) throws Exception {
        JSONObject remote = new JSONObject(new String(fetch(SITE + MANIFEST + "?t=" + System.currentTimeMillis()), "UTF-8"));
        JSONObject current = currentManifest(c);
        if (current != null && remote.optString("v").equals(current.optString("v"))) return false;

        Map<String, String> have = new HashMap<String, String>();
        if (current != null) {
            JSONArray cf = current.getJSONArray("files");
            for (int i = 0; i < cf.length(); i++) {
                JSONObject e = cf.getJSONObject(i);
                have.put(e.getString("p"), e.getString("h"));
            }
        }
        boolean fromLive = hasLive(c);
        File stage = stage(c);
        deleteTree(stage);
        if (!stage.mkdirs()) throw new IOException("stage");

        JSONArray files = remote.getJSONArray("files");
        for (int i = 0; i < files.length(); i++) {
            JSONObject e = files.getJSONObject(i);
            String path = clean(e.getString("p"));
            String hash = e.getString("h");
            File dest = new File(stage, path);
            File parent = dest.getParentFile();
            if (parent != null && !parent.isDirectory() && !parent.mkdirs()) throw new IOException("mkdir");
            boolean same = hash.equals(have.get(path));
            boolean pdf = path.endsWith(".pdf");
            if (same) {
                File old = new File(live(c), path);
                if (fromLive && old.isFile()) {
                    if (!old.renameTo(dest)) copy(new FileInputStream(old), dest);
                } else if (!pdf) {
                    copy(c.getAssets().open(MainActivity.WWW + path), dest);
                }
                // unchanged PDFs that live in the APK stay there
            } else {
                download(SITE + e.getString("u"), dest, hash);
            }
        }
        OutputStream mo = new FileOutputStream(new File(stage, "update.json"));
        try {
            mo.write(remote.toString().getBytes("UTF-8"));
        } finally {
            mo.close();
        }
        File live = live(c);
        File old = new File(c.getFilesDir(), "old");
        deleteTree(old);
        if (live.exists() && !live.renameTo(old)) throw new IOException("swap");
        if (!stage.renameTo(live)) {
            old.renameTo(live);
            throw new IOException("swap");
        }
        deleteTree(old);
        clearPdfCache(c);
        return true;
    }

    static JSONObject currentManifest(Context c) {
        try {
            InputStream in = hasLive(c)
                    ? new FileInputStream(new File(live(c), "update.json"))
                    : c.getAssets().open(MainActivity.WWW + "update.json");
            return new JSONObject(new String(readAll(in), "UTF-8"));
        } catch (Exception e) {
            return null;
        }
    }

    /** Only relative paths like "index.html", "fonts/Inter-VF.woff", "ait401-m1-part-a.pdf". */
    static String clean(String p) throws IOException {
        if (p == null || p.startsWith("/") || p.contains("..") || p.contains("\\") || !p.matches("[A-Za-z0-9._/-]+"))
            throw new IOException("bad path " + p);
        return p;
    }

    static byte[] fetch(String url) throws IOException {
        HttpURLConnection h = connect(url);
        try {
            return readAll(h.getInputStream());
        } finally {
            h.disconnect();
        }
    }

    static void download(String url, File dest, String sha1) throws Exception {
        HttpURLConnection h = connect(url);
        File part = new File(dest.getPath() + ".part");
        MessageDigest md = MessageDigest.getInstance("SHA-1");
        try {
            InputStream in = h.getInputStream();
            OutputStream out = new FileOutputStream(part);
            try {
                byte[] buf = new byte[65536];
                int n;
                while ((n = in.read(buf)) > 0) {
                    out.write(buf, 0, n);
                    md.update(buf, 0, n);
                }
            } finally {
                in.close();
                out.close();
            }
        } finally {
            h.disconnect();
        }
        if (!hex(md.digest()).equalsIgnoreCase(sha1)) {
            part.delete();
            throw new IOException("checksum " + dest.getName());
        }
        if (!part.renameTo(dest)) throw new IOException("rename " + dest.getName());
    }

    static HttpURLConnection connect(String url) throws IOException {
        HttpURLConnection h = (HttpURLConnection) new URL(url).openConnection();
        h.setConnectTimeout(10000);
        h.setReadTimeout(30000);
        h.setUseCaches(false);
        h.setRequestProperty("Cache-Control", "no-cache");
        if (h.getResponseCode() != 200) {
            h.disconnect();
            throw new IOException("HTTP " + url);
        }
        return h;
    }

    static byte[] readAll(InputStream in) throws IOException {
        try {
            ByteArrayOutputStream b = new ByteArrayOutputStream();
            byte[] buf = new byte[65536];
            int n;
            while ((n = in.read(buf)) > 0) b.write(buf, 0, n);
            return b.toByteArray();
        } finally {
            in.close();
        }
    }

    static void copy(InputStream in, File dest) throws IOException {
        OutputStream out = new FileOutputStream(dest);
        try {
            byte[] buf = new byte[65536];
            int n;
            while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
        } finally {
            in.close();
            out.close();
        }
    }

    static String hex(byte[] b) {
        StringBuilder s = new StringBuilder(b.length * 2);
        for (byte x : b) s.append(String.format("%02x", x & 0xff));
        return s.toString();
    }

    /** PdfProvider keeps copies in cache/pdf; drop them so viewers get the new files. */
    static void clearPdfCache(Context c) {
        deleteTree(new File(c.getCacheDir(), "pdf"));
    }

    static void deleteTree(File f) {
        if (f == null || !f.exists()) return;
        File[] kids = f.listFiles();
        if (kids != null) for (File k : kids) deleteTree(k);
        f.delete();
    }
}
