<div align="center">

<h1>✍️ Signature Animation</h1>

<p><strong>A premium, hand-drawn SVG signature animation — built with pure HTML, CSS & JavaScript</strong></p>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![SVG](https://img.shields.io/badge/SVG-FFB13B?style=for-the-badge&logo=svg&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/SVG)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://figma.com)

<br/>

 *"Every signature tells a story — this one animates it."*

</div>

---

## 📖 About The Project

This project showcases a **premium animated signature** that mimics a real pen writing on screen.

The signature paths are hand-traced in **Figma** from a real physical signature, exported as **SVG**, then animated using the CSS `stroke-dashoffset` technique — creating a fluid, cinematic draw-on effect with a **golden shimmer glow**, twinkling star particles, and elegant decorative framing.

> 🎨 **Made By:** [Naivedh Patel](https://github.com/naivedhP2518)

---

## ✨ Features

| Feature | Description |
|:---|:---|
| 🖊️ **Draw-On Animation** | Each stroke of the signature appears one by one, like a real pen writing |
| ✨ **Gold Shimmer Effect** | Continuous shimmer cycling through rich gold tones after drawing completes |
| 🌟 **Twinkling Star Particles** | 55 randomly placed ambient particles that twinkle with JavaScript |
| 💫 **Ambient Glow Orb** | Soft radial glow behind the signature that pulses gently |
| 📐 **Corner Ornaments** | Elegant frame corners that fade in to give a certificate-like feel |
| 〰️ **Divider Lines** | Horizontal golden gradient lines that sweep in from center |
| 🏷️ **Premium Label** | "Made By Naivedh Patel" credit tag that fades in last |
| 📱 **Fully Responsive** | Scales beautifully across all screen sizes |

---

## 🗂️ Project Structure

```
📁 SIGN ANIMATION/
│
├── 📄 Index.html              →  HTML structure & inline SVG signature paths
│
├── 📁 CSS/
│   └── 🎨 Style.css           →  All animations, layout, colors & visual styles
│
└── 📁 JavaScript/
    └── ⚡ Sign.js              →  Dynamic twinkling star particle generator
```

---

## 🛠️ Tech Stack

| Technology | Role |
|:---|:---|
| **HTML5** | Page structure and SVG embedding |
| **CSS3** | Keyframe animations, `stroke-dashoffset`, filters, glows |
| **Vanilla JavaScript** | Procedurally generated twinkling star particles |
| **SVG** | Vector-based scalable signature paths |
| **Figma** | Signature photo import, pen-tool tracing & SVG export |

---

## 🎬 How The Animation Works

The entire draw-on effect is powered by the **SVG `stroke-dashoffset` trick** — no libraries needed:

```css
/* Step 1 — Hide the path by pushing the dash offset to equal the full path length */
.path-b {
  stroke-dasharray: 700;    /* total length of this path */
  stroke-dashoffset: 700;   /* fully hidden at start */
  animation: drawPath 1.2s 0.3s ease forwards;
}

/* Step 2 — Animate the offset back to 0 → the stroke "draws itself" */
@keyframes drawPath {
  to { stroke-dashoffset: 0; }
}

/* Step 3 — After drawing, apply an infinite shimmer through gold tones */
@keyframes shimmer {
  0%   { stroke: #b8860b; }
  40%  { stroke: #ffd700; }
  60%  { stroke: #ffe066; }
  100% { stroke: #b8860b; }
}
```

Each letter/stroke has a **staggered `animation-delay`** so they appear in sequence — exactly like a real signature being written.

---

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- A code editor — [VS Code](https://code.visualstudio.com/) recommended

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/naivedhP2518/signature.git

# 2. Enter the project directory
cd "SIGN ANIMATION"

# 3. Open in browser
start Index.html
```

> 💡 **Tip:** Install the **Live Server** extension in VS Code and click *"Go Live"* for instant hot-reload during development.

---

## ✍️ How To Create Your Own Signature Animation

Follow these **5 simple steps** to build this effect from scratch using your own signature:

---

### 📸 Step 1 — Capture Your Signature

Sign your name on **plain white paper** with a **dark pen** (black or blue ink).

- ✅ Use good, even lighting — avoid shadows across the paper
- ✅ Keep the background clean and uniform (white paper only)
- ✅ Take a **clear, sharp, top-down photo** with your phone

> 💡 **Pro Tip:** Use your phone's built-in **Document Scanner** mode (available in most camera apps) to automatically flatten, crop, and boost the contrast of your signature photo.

---

### 📥 Step 2 — Import Into Figma

Open [Figma](https://figma.com) and bring your signature photo into the canvas.

```
Figma → Menu → File → Place Image → Select your signature photo
```

Setup your workspace:

- Create a **frame** at a comfortable working size (e.g., `900 × 400px`)
- **Lower the image opacity to 30–40%** so you can trace over it clearly without distraction
- Lock the image layer (`Right-click → Lock`) so it doesn't move while tracing

---

### 🖊️ Step 3 — Trace With The Pen Tool

Select **Figma's Pen Tool** (keyboard shortcut: `P`) and manually trace each stroke.

- Trace **one stroke per path** — each stroke becomes one `<path>` element in the final SVG
- Use **bezier curve handles** to match the natural, flowing curves of your handwriting
- Give each traced path:
  - **Stroke**: `2px`, any solid color (you'll override this in CSS)
  - **Fill**: `None`
- Accuracy here directly affects how realistic the animation feels — take your time

> ⚠️ **Critical:** Keep every stroke as an **open path** (don't close the shape). Closed paths break the `stroke-dashoffset` draw-on animation.

---

### 📋 Step 4 — Copy As SVG

Once all strokes are traced:

1. **Select all paths** — `Ctrl + A` (Windows) / `Cmd + A` (Mac)
2. **Right-click** on your selection
3. Choose **"Copy as SVG"**
4. Paste into a text editor (Notepad, VS Code, etc.) to review the raw SVG code

Your exported SVG will look like this:

```xml
<svg viewBox="0 0 948 376" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 305L12 166C18.1 151 24.4 159 ..." stroke="#000" stroke-width="2"/>
  <path d="M718 112C717.2 135 769.8 88 751 79..." stroke="#000" stroke-width="2"/>
  <!-- one <path> per stroke of your signature -->
</svg>
```

---

### 💻 Step 5 — Embed SVG In HTML & Animate With CSS

Paste the SVG directly into your HTML file and wire up the CSS animation:

**`Index.html` — embed the SVG inline:**

```html
<div class="sig-wrap">
  <svg class="sig-svg" viewBox="0 0 948 376" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="sig-path path-stroke-1" d="M4.5 305L12 166..."/>
    <path class="sig-path path-stroke-2" d="M718 112C717.2..."/>
    <!-- Add all your paths here -->
  </svg>
</div>
```

**`Style.css` — animate each path:**

```css
/* Base style applied to ALL paths */
.sig-path {
  fill: none;
  stroke: #d4af37;       /* gold color — override per path if needed */
  stroke-width: 7;
  stroke-linecap: round;
}

/* Each path: dasharray = path length, dashoffset = same (hidden start) */
.path-stroke-1 {
  stroke-dasharray: 700;
  stroke-dashoffset: 700;
  animation:
    drawPath 1.2s 0.3s ease forwards,       /* draw-on effect */
    shimmer  3s   2.0s ease-in-out infinite; /* gold shimmer after */
}

.path-stroke-2 {
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation:
    drawPath 1.0s 0.8s ease forwards,
    shimmer  3s   2.4s ease-in-out infinite;
}

/* The draw-on keyframe */
@keyframes drawPath {
  to { stroke-dashoffset: 0; }
}

/* Gold shimmer loop */
@keyframes shimmer {
  0%   { stroke: #b8860b; }
  20%  { stroke: #e8c84a; }
  40%  { stroke: #ffd700; }
  60%  { stroke: #ffe066; }
  80%  { stroke: #d4a017; }
  100% { stroke: #b8860b; }
}
```

> 📏 **Finding Exact Path Length:** Open your browser's DevTools Console (`F12`) and run:
> ```javascript
> document.querySelector('.path-stroke-1').getTotalLength();
> // → e.g., 693.4  →  use 700 as your stroke-dasharray value
> ```

---

## ⏱️ Animation Timeline

```
Page Load
    │
    ├─ 0.0s  ──▶  Stars generated (JS) · Glow orb begins pulsing
    ├─ 0.3s  ──▶  Line-top & Line-bottom sweep in from center
    ├─ 0.3s  ──▶  "B" letter stroke draws on
    ├─ 0.8s  ──▶  Corner ornaments fade in
    ├─ 0.8s  ──▶  "Bx" X strokes draw
    ├─ 1.0s  ──▶  "X2" cross strokes draw
    ├─ 1.3s  ──▶  "A" letter draws
    ├─ 1.5s  ──▶  "R1" first R draws
    ├─ 1.8s  ──▶  "R2" second R + Underline sweeps in
    ├─ 2.1s  ──▶  Dot 1 appears
    ├─ 2.3s  ──▶  Dot 2 appears
    └─ 2.8s  ──▶  "Made By Naivedh Patel" label fades in
         │
         └─ 2.0s+ ──▶  ALL paths begin infinite gold shimmer loop ♾️
```

---

## 🎨 Color Palette

| Swatch | Name | Hex | Usage |
|:---:|:---|:---|:---|
| 🟦 | **Deep Navy** | `#020818` | Body background |
| 🟦 | **Midnight Blue** | `#020c24` | Card gradient base |
| 🟡 | **Royal Gold** | `#d4af37` | Primary stroke color |
| 🟡 | **Bright Gold** | `#ffd700` | Shimmer highlight peak |
| 🟡 | **Pale Gold** | `#ffe066` | Shimmer brightest tone |
| 🟡 | **Dark Gold** | `#b8860b` | Shimmer shadow base |

---

<div align="center">

**Made with ❤️ by [Naivedh Patel](https://github.com/naivedhP2518)**

⭐ *If you found this useful, give it a star on GitHub!* ⭐

</div>
