package com.ananth.pyqbank;

import android.content.ContentProvider;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.MatrixCursor;
import android.net.Uri;
import android.os.ParcelFileDescriptor;
import android.provider.OpenableColumns;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.List;

/**
 * Serves the PDFs (files/live from Updater, else bundled in assets/www) to other apps (PDF viewers, share targets).
 * URI shape: content://<package>.pdf/<asset-name>/<display-name>
 * Each PDF is copied once into the app cache so viewers get a real, seekable file.
 */
public class PdfProvider extends ContentProvider {

    static String authority(Context c) {
        return c.getPackageName() + ".pdf";
    }

    static Uri uriFor(Context c, String asset, String displayName) {
        return new Uri.Builder().scheme("content").authority(authority(c))
                .appendPath(asset).appendPath(displayName).build();
    }

    /** Only plain file names like "ait401-m1-part-a.pdf" are allowed. */
    static String cleanAssetName(String p) {
        if (p == null) return null;
        int slash = p.lastIndexOf('/');
        if (slash >= 0) p = p.substring(slash + 1);
        if (!p.matches("[A-Za-z0-9._-]+\\.pdf") || p.startsWith(".")) return null;
        return p;
    }

    static String cleanDisplayName(String n, String fallback) {
        if (n == null) return fallback;
        n = n.replaceAll("[\\\\/:*?\"<>|\\p{Cntrl}]", "_").trim();
        if (n.length() == 0) return fallback;
        if (!n.toLowerCase().endsWith(".pdf")) n = n + ".pdf";
        return n;
    }

    @Override
    public boolean onCreate() {
        return true;
    }

    private String assetOf(Uri uri) throws FileNotFoundException {
        List<String> seg = uri.getPathSegments();
        String a = seg.isEmpty() ? null : cleanAssetName(seg.get(0));
        if (a == null) throw new FileNotFoundException(uri.toString());
        return a;
    }

    private String nameOf(Uri uri, String asset) {
        List<String> seg = uri.getPathSegments();
        return cleanDisplayName(seg.size() > 1 ? seg.get(1) : null, asset);
    }

    private synchronized File ensure(String asset) throws FileNotFoundException {
        // a newer copy downloaded by Updater is already a real file
        File liveCopy = new File(Updater.live(getContext()), asset);
        if (Updater.hasLive(getContext()) && liveCopy.isFile()) return liveCopy;
        File dir = new File(getContext().getCacheDir(), "pdf");
        if (!dir.isDirectory() && !dir.mkdirs()) throw new FileNotFoundException("cache");
        File f = new File(dir, asset);
        if (f.isFile() && f.length() > 0) return f;
        File tmp = new File(dir, asset + ".part");
        try {
            InputStream in = getContext().getAssets().open(MainActivity.WWW + asset);
            FileOutputStream out = new FileOutputStream(tmp);
            try {
                byte[] buf = new byte[65536];
                int n;
                while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
            } finally {
                in.close();
                out.close();
            }
            if (!tmp.renameTo(f)) throw new FileNotFoundException("rename");
            return f;
        } catch (FileNotFoundException e) {
            throw e;
        } catch (Exception e) {
            tmp.delete();
            throw new FileNotFoundException(asset);
        }
    }

    @Override
    public ParcelFileDescriptor openFile(Uri uri, String mode) throws FileNotFoundException {
        if (mode != null && mode.contains("w")) throw new SecurityException("read only");
        return ParcelFileDescriptor.open(ensure(assetOf(uri)), ParcelFileDescriptor.MODE_READ_ONLY);
    }

    @Override
    public Cursor query(Uri uri, String[] projection, String selection, String[] args, String sort) {
        String asset;
        long size;
        try {
            asset = assetOf(uri);
            size = ensure(asset).length();
        } catch (FileNotFoundException e) {
            return null;
        }
        String[] cols = projection != null ? projection
                : new String[]{OpenableColumns.DISPLAY_NAME, OpenableColumns.SIZE};
        MatrixCursor c = new MatrixCursor(cols, 1);
        Object[] row = new Object[cols.length];
        for (int i = 0; i < cols.length; i++) {
            if (OpenableColumns.DISPLAY_NAME.equals(cols[i])) row[i] = nameOf(uri, asset);
            else if (OpenableColumns.SIZE.equals(cols[i])) row[i] = size;
            else row[i] = null;
        }
        c.addRow(row);
        return c;
    }

    @Override
    public String getType(Uri uri) {
        return "application/pdf";
    }

    @Override
    public Uri insert(Uri uri, ContentValues values) {
        throw new UnsupportedOperationException();
    }

    @Override
    public int delete(Uri uri, String selection, String[] args) {
        throw new UnsupportedOperationException();
    }

    @Override
    public int update(Uri uri, ContentValues values, String selection, String[] args) {
        throw new UnsupportedOperationException();
    }
}
