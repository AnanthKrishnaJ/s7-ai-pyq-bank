package com.ananth.pyqbank;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.ActivityNotFoundException;
import android.content.ClipData;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.res.Configuration;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.view.View;
import android.view.Window;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

public class MainActivity extends Activity {
    static final String WWW = "www/";
    static final String BASE = "file:///android_asset/" + WWW;

    private WebView web;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        web = new WebView(this);
        applyBars(isNight());
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(true);
        s.setTextZoom(100);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);
        s.setSupportZoom(false);
        s.setBuiltInZoomControls(false);
        s.setDisplayZoomControls(false);
        web.addJavascriptInterface(new Bridge(), "AndroidApp");
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                return handleUrl(req.getUrl().toString());
            }

            @SuppressWarnings("deprecation")
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return handleUrl(url);
            }
        });
        setContentView(web);
        Updater.checkApk(this);
        if (state == null || web.restoreState(state) == null) {
            web.loadUrl(home() + "index.html");
        }
    }

    /** Downloaded site content (files/live) when there is some, else the copy in the APK. */
    String home() {
        return Updater.hasLive(this) ? Updater.liveBase(this) : BASE;
    }

    /** Background check for newer site content; the page shows a Reload banner when it is ready. */
    void checkForUpdate(boolean force) {
        Updater.checkAsync(getApplicationContext(), force, new Updater.Listener() {
            @Override
            public void updated() {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        if (web != null) web.evaluateJavascript("window.__appUpdated&&window.__appUpdated()", null);
                    }
                });
            }
        });
    }

    static final int DARK_BG = 0xFF0D1117;

    boolean isNight() {
        return (getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK) == Configuration.UI_MODE_NIGHT_YES;
    }

    /** Status bar, navigation bar and page background follow the page's light / dark theme. */
    boolean pageDark;

    void applyBars(boolean dark) {
        pageDark = dark;
        Window w = getWindow();
        int bg = dark ? DARK_BG : Color.WHITE;
        w.setStatusBarColor(bg);
        w.setNavigationBarColor(bg);
        int flags = 0;
        if (!dark) {
            flags = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
            if (Build.VERSION.SDK_INT >= 26) flags |= View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
        }
        w.getDecorView().setSystemUiVisibility(flags);
        if (web != null) web.setBackgroundColor(bg);
    }

    @Override
    public void onConfigurationChanged(Configuration c) {
        super.onConfigurationChanged(c);
        if (web != null) web.evaluateJavascript("window.__appNight&&window.__appNight(" + isNight() + ")", null);
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    protected void onPause() {
        super.onPause();
        web.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume();
        checkForUpdate(false);
    }

    @Override
    protected void onDestroy() {
        if (web != null) {
            web.destroy();
            web = null;
        }
        super.onDestroy();
    }

    @SuppressWarnings("deprecation")
    @Override
    public void onBackPressed() {
        if (web == null) {
            super.onBackPressed();
            return;
        }
        web.evaluateJavascript("(window.__appBack&&window.__appBack())?'1':'0'", new ValueCallback<String>() {
            @Override
            public void onReceiveValue(String v) {
                if (v == null || !v.contains("1")) {
                    if (web != null && web.canGoBack()) web.goBack();
                    else finish();
                }
            }
        });
    }

    /** Links: bundled PDFs open natively, web links go to the browser, everything else stays in the app. */
    boolean handleUrl(String url) {
        if (url == null) return false;
        String live = Updater.liveBase(this);
        String root = url.startsWith(BASE) ? BASE : url.startsWith(live) ? live : null;
        if (root != null) {
            String rest = url.substring(root.length());
            int cut = rest.indexOf('#');
            if (cut >= 0) rest = rest.substring(0, cut);
            cut = rest.indexOf('?');
            if (cut >= 0) rest = rest.substring(0, cut);
            if (rest.toLowerCase().endsWith(".pdf")) {
                showPdfOptions(rest, rest);
                return true;
            }
            return false;
        }
        if (url.startsWith("http:") || url.startsWith("https:") || url.startsWith("mailto:") || url.startsWith("tel:")) {
            try {
                startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
            } catch (ActivityNotFoundException e) {
                toast("No app can open this link");
            }
            return true;
        }
        return false;
    }

    final class Bridge {
        @JavascriptInterface
        public void pdf(final String path, final String filename) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    showPdfOptions(path, filename);
                }
            });
        }

        @JavascriptInterface
        public boolean isNight() {
            return MainActivity.this.isNight();
        }

        @JavascriptInterface
        public void setTheme(final boolean dark) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    applyBars(dark);
                }
            });
        }

        /** Reload button on the update banner: open the downloaded page at the same view. */
        @JavascriptInterface
        public void reload(final String hash) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (web == null) return;
                    String h = hash != null && hash.startsWith("#") && hash.length() < 300 ? hash : "";
                    web.loadUrl(home() + "index.html" + h);
                }
            });
        }

        @JavascriptInterface
        public int sdk() {
            return Build.VERSION.SDK_INT;
        }
    }

    void showPdfOptions(String path, String filename) {
        final String asset = PdfProvider.cleanAssetName(path);
        if (asset == null || !assetExists(asset)) {
            toast("This PDF is not in the app");
            return;
        }
        final String name = PdfProvider.cleanDisplayName(filename, asset);
        final List<String> labels = new ArrayList<String>();
        final List<Integer> actions = new ArrayList<Integer>();
        labels.add("Open");
        actions.add(0);
        labels.add("Share");
        actions.add(1);
        if (Build.VERSION.SDK_INT >= 29) {
            labels.add("Save to Downloads");
            actions.add(2);
        }
        new AlertDialog.Builder(this, pageDark ? android.R.style.Theme_DeviceDefault_Dialog_Alert : android.R.style.Theme_DeviceDefault_Light_Dialog_Alert)
                .setTitle(name)
                .setItems(labels.toArray(new String[0]), new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface d, int which) {
                        int a = actions.get(which);
                        if (a == 0) openPdf(asset, name);
                        else if (a == 1) sharePdf(asset, name);
                        else savePdf(asset, name);
                    }
                })
                .setNegativeButton("Cancel", null)
                .show();
    }

    boolean assetExists(String asset) {
        return Updater.exists(this, asset);
    }

    void openPdf(String asset, String name) {
        Uri uri = PdfProvider.uriFor(this, asset, name);
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setDataAndType(uri, "application/pdf");
        i.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_DOCUMENT);
        try {
            startActivity(i);
        } catch (ActivityNotFoundException e) {
            toast(Build.VERSION.SDK_INT >= 29
                    ? "No PDF viewer found. Use Save to Downloads instead."
                    : "No PDF viewer found. Install one (e.g. Google Drive) or use Share.");
        }
    }

    void sharePdf(String asset, String name) {
        Uri uri = PdfProvider.uriFor(this, asset, name);
        Intent i = new Intent(Intent.ACTION_SEND);
        i.setType("application/pdf");
        i.putExtra(Intent.EXTRA_STREAM, uri);
        i.putExtra(Intent.EXTRA_SUBJECT, name);
        i.setClipData(ClipData.newRawUri(name, uri));
        i.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
        try {
            startActivity(Intent.createChooser(i, "Share " + name));
        } catch (ActivityNotFoundException e) {
            toast("No app to share with");
        }
    }

    void savePdf(final String asset, final String name) {
        toast("Saving…");
        new Thread(new Runnable() {
            @Override
            public void run() {
                String msg;
                try {
                    ContentResolver cr = getContentResolver();
                    ContentValues v = new ContentValues();
                    v.put(MediaStore.MediaColumns.DISPLAY_NAME, name);
                    v.put(MediaStore.MediaColumns.MIME_TYPE, "application/pdf");
                    v.put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS + "/PYQ Bank");
                    v.put(MediaStore.MediaColumns.IS_PENDING, 1);
                    Uri dest = cr.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, v);
                    if (dest == null) throw new IllegalStateException("insert failed");
                    InputStream in = Updater.open(MainActivity.this, asset);
                    OutputStream out = cr.openOutputStream(dest);
                    try {
                        byte[] buf = new byte[65536];
                        int n;
                        while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
                    } finally {
                        in.close();
                        if (out != null) out.close();
                    }
                    v.clear();
                    v.put(MediaStore.MediaColumns.IS_PENDING, 0);
                    cr.update(dest, v, null, null);
                    msg = "Saved to Downloads/PYQ Bank";
                } catch (Exception e) {
                    msg = "Couldn't save the PDF";
                }
                final String m = msg;
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        toast(m);
                    }
                });
            }
        }).start();
    }

    void toast(String m) {
        Toast.makeText(this, m, Toast.LENGTH_SHORT).show();
    }
}
