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

## Rebuild

```bash
python src/build.py src/ait401-base.html .
```

This writes `out/index.html` (copy it to the repo root) plus print pages used to make the PDFs with headless Edge/Chrome (`--print-to-pdf`).

Made by Ananth.
