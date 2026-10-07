# Early Lens · clickable prototype

Early Lens helps primary school teachers notice possible learning difficulties earlier. It uses results schools already collect, compares each child's pattern against national data, and looks at writing-sample patterns. It flags students for the **teacher**, who decides what happens next. It never diagnoses.

This is a front-end demo for a pitch video. It has no backend and all data is fictional.

## Run it

- **Locally:** open `index.html` in a browser. Nothing to install.
- **Online:** pushes to `main` deploy to GitHub Pages via `.github/workflows/`.

All data lives in the `DATA` object at the top of the `<script>` in `index.html`. Charts are plain SVG, so the page needs no libraries. Fonts load from Google Fonts and fall back to system fonts offline.

## Demo path

1. **Teacher: Ms Patel** → class dashboard (25 students, 3 flags)
2. Open **Mia Nguyen** → scroll the chart → save the pre-filled teacher's note
3. **Discuss with parent** → Send → **Switch to parent login** (toast button or "Switch user")
4. **Parent: Mia's parent** → consent screen → **I agree** → Mia's flag, explanation and next steps

Other screens: **National view**, **Privacy & security** (both roles). "Reset demo" in the footer restores the starting state.
