# S7 AI PYQ Bank

KTU 2019 scheme, Semester 7 B.Tech (Artificial Intelligence): previous year university questions with answers for four courses.

| Course | Name | Papers |
|---|---|---|
| AIT401 | Foundations of Deep Learning | 5 |
| CST423 | Cloud Computing | 4 |
| EET435 | Renewable Energy Systems | 6 |
| MCN401 | Industrial Safety Engineering | 8 |

Every question is sorted by module (Part A: Q1–2 Module I … Q9–10 Module V), tagged with how many exams it repeated in, and answered to its marks with a "How to score" split and drawn figures.

## What is in this repo

- `index.html`: the whole site (single static page, no build step needed to host it).
- `pdf/`: one PDF book per subject, plus a Part A (3-mark) and a Part B (14-mark) PDF for every module (40 files).
- `data/`: question papers and answer cards for CST423, EET435 and MCN401.
- `src/`: page shell, app script, figure library, and `build.py`. `src/ait401-base.html` carries the AIT401 papers, answers and figures.
- `app/PYQ-Bank.apk`: the Android app (linked from the "Android app" button on the site).
- `android/`: source and build script for the Android app.

## Rebuild

```bash
python src/build.py src/ait401-base.html .
```

This writes `out/index.html` (copy it to the repo root) plus print pages used to make the PDFs with headless Edge/Chrome (`--print-to-pdf`).

## Android app

`app/PYQ-Bank.apk` is the same site packaged as an offline Android app (Android 7+). All 48 PDFs are inside it; tapping a PDF button offers Open, Share or Save to Downloads, and the Back button steps back through the views.

Install: download the APK on the phone, open it, and allow "Install unknown apps" when asked.

Rebuild after changing the site (no Gradle or Android SDK needed):

```bash
KEYSTORE=path/to/pyqbank-release.p12 KEYPASS=... android/build.sh
```

The script packs `index.html` + `pdf/` into the app and writes `app/PYQ-Bank.apk`. The signing key is kept outside the repo; every update must be signed with the same key or Android won't install it over the old version.

Made by Ananth.
