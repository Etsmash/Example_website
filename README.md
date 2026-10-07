# Early Lens · clickable prototype for parents

Early Lens helps parents notice possible learning difficulties earlier. It uses results their child's school already collects (e.g. NAPLAN and classroom assessments), compares their child's pattern with national data, and looks at writing-sample patterns. It flags patterns. It never diagnoses, and the parent decides what happens next, including whether to share a flag with the teacher.

This is a front-end demo for a pitch video. It has no backend and all data is fictional.

## Run it

- **Locally:** open `index.html` in a browser. Nothing to install.
- **Online:** pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.

All data lives in the `DATA` object at the top of the `<script>` in `index.html`. Charts are plain SVG, so the page needs no libraries.

## Demo path

1. **Parent: Nguyen family** → consent screen → **I agree**
2. Home: Mia (Year 2) shows "Worth a closer look"; Leo (Year 5) shows "No flags"
3. **See what we noticed** → scroll the chart → save the pre-filled note from home
4. **Share with Ms Patel** → Share → a few seconds later Ms Patel replies → **Book Thursday, 3:15 pm**

Other screens: **National picture** (one child against the national spread) and **Privacy & security** (access log, who can see what, withdraw consent). "Reset demo" in the footer restores the starting state.
