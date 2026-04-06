
<div align="center">

# ✍️ Signature Animation

### A premium, hand-drawn SVG signature animation built with pure HTML, CSS & JavaScript

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![SVG](https://img.shields.io/badge/SVG-FFB13B?style=for-the-badge&logo=svg&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/SVG)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://figma.com)

</div>

---

## 📖 About The Project

This project showcases a **premium animated signature** that mimics a real pen writing on screen. The signature paths are hand-traced in Figma from a real physical signature, exported as SVG, then animated using CSS `stroke-dashoffset` technique — creating a fluid, cinematic draw-on effect with a golden shimmer glow.

> **Made By:** Naivedh Patel

---

## ✨ Features

| Feature | Description |
|---|---|
| 🖊️ **Draw-On Animation** | Each stroke of the signature appears one by one, like a real pen writing |
| ✨ **Gold Shimmer Effect** | Continuous shimmer cycling through rich gold tones after drawing completes |
| 🌟 **Twinkling Star Particles** | 55 randomly placed ambient star particles that twinkle dynamically |
| 💫 **Glow Orb** | Soft ambient radial glow behind the signature that pulses gently |
| 📐 **Corner Ornaments** | Elegant frame corners that fade in to give a certificate-like feel |
| 〰️ **Divider Lines** | Horizontal golden gradient lines that sweep in from center |
| 📜 **Premium Label** | "Made By Naivedh Patel" credit tag that fades in last |
| 📱 **Responsive Design** | Scales beautifully across all screen sizes |

---

## 🗂️ Project Structure

```
SIGN ANIMATION/
│
├── 📄 Index.html          → Main HTML structure & SVG signature paths
├── 📁 CSS/
│   └── 🎨 Style.css       → All animations, layout & visual styles
└── 📁 JavaScript/
    └── ⚡ Sign.js          → Dynamic star particle generator
```

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **HTML5** | Page structure, SVG embedding |
| **CSS3** | Animations (`stroke-dashoffset`, keyframes, filters) |
| **Vanilla JavaScript** | Procedurally generated star particles |
| **SVG** | Vector signature paths |
| **Figma** | Signature tracing & SVG export tool |

---

## 🎬 How The Animation Works

The core trick is the **SVG stroke-dashoffset technique**:

```css
/* 1. Measure the path length and set dasharray equal to it */
.path-b {
  stroke-dasharray: 700;   /* total length of the path */
  stroke-dashoffset: 700;  /* start fully "hidden" */
  animation: drawPath 1.2s 0.3s ease forwards;
}

/* 2. Animate the offset to 0 → path "draws itself" */
@keyframes drawPath {
  to { stroke-dashoffset: 0; }
}
```

Each letter/stroke has a staggered `animation-delay` so they appear in sequence, just like a real signature being written.

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- A code editor (VS Code recommended)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/naivedhP2518/sign-animation.git

# Navigate into the project
cd "SIGN ANIMATION"

# Open in browser (just open the file or use Live Server)
start Index.html
```

> 💡 **Tip:** Use the **Live Server** extension in VS Code for the best development experience with auto-reload.

---

## ✍️ How To Create Your Own Signature Animation

Follow these **5 steps** to recreate this effect with your own signature:

---

### 📸 Step 1 — Capture Your Signature

Sign your name on a **plain white paper** with a **dark pen** (black or blue ink preferred).

- Use good lighting to avoid shadows
- Keep the background clean and uniform
- Take a **clear, sharp photo** with your phone camera

> 💡 **Pro Tip:** Use your phone's document scanner mode (available in most camera apps) to get a clean, high-contrast image automatically.

---

### 📥 Step 2 — Import Into Figma

Open [Figma](https://figma.com) and import your signature photo.

```
Figma → File → Place Image → Select your signature photo
```

- Resize the image to a comfortable working size (e.g., **900 × 400px** frame)
- Lower the opacity of the image to **30–40%** so you can trace over it clearly

---

### 🖊️ Step 3 — Trace With The Pen Tool

Use Figma's **Pen Tool (P)** to manually trace each stroke of your signature.

- Trace **one stroke at a time** — each stroke becomes one `<path>` in SVG
- Use **curve handles** to match the natural flow of your handwriting
- Don't rush — accuracy here directly affects how realistic the final animation looks
- Give each path a **stroke** (e.g., `2px`, black) and **no fill**

> ⚠️ **Important:** Keep strokes as **open paths** (not closed shapes) so the draw-on animation works correctly.

---

### 📋 Step 4 — Copy As SVG

Once your signature is fully traced in Figma:

1. **Select all** your signature paths (`Ctrl + A` or `Cmd + A`)
2. **Right-click** → `Copy as SVG`
3. Paste it into a text editor to inspect the raw SVG code

Your SVG will look something like this:

```xml
<svg viewBox="0 0 948 376" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 305L12 166C18.1 151 24.4 159 ..." stroke="#000" stroke-width="2"/>
  <path d="M718 112C717.2 135 769.8 88 751 79..." stroke="#000" stroke-width="2"/>
  <!-- more paths... -->
</svg>
```

---

### 💻 Step 5 — Add SVG To HTML & Animate

Paste your SVG directly into your HTML and apply the CSS animation technique:

**HTML — embed the SVG:**
```html
<div class="sig-wrap">
  <svg class="sig-svg" viewBox="0 0 948 376" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="sig-path path-letter-1" d="M4.5 305L12 166..."/>
    <path class="sig-path path-letter-2" d="M718 112C717.2..."/>
    <!-- Add all your paths here -->
  </svg>
</div>
```

**CSS — animate each path:**
```css
/* Base style for all paths */
.sig-path {
  fill: none;
  stroke: #d4af37;          /* gold color */
  stroke-width: 7;
  stroke-linecap: round;
}

/* For each path: set dasharray = approximate path length */
.path-letter-1 {
  stroke-dasharray: 700;
  stroke-dashoffset: 700;
  animation: drawPath 1.2s 0.3s ease forwards,  /* draw-on effect */
             shimmer 3s 2s ease-in-out infinite; /* gold shimmer after */
}

.path-letter-2 {
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: drawPath 1s 0.8s ease forwards,
             shimmer 3s 2.4s ease-in-out infinite;
}

/* The magic keyframe */
@keyframes drawPath {
  to { stroke-dashoffset: 0; }
}

/* Optional: shimmer through gold tones */
@keyframes shimmer {
  0%   { stroke: #b8860b; }
  40%  { stroke: #ffd700; }
  60%  { stroke: #ffe066; }
  100% { stroke: #b8860b; }
}
```

> 📏 **Finding Path Length:** Use browser DevTools → Console:
> ```javascript
> document.querySelector('.path-letter-1').getTotalLength();
> // Returns the exact length → use this as your dasharray value
> ```

---

## 🎨 Animation Architecture

```
Page Load
    │
    ├─ 0.0s  → Stars generated (JS), Glow orb starts pulsing
    ├─ 0.3s  → Line-top & Line-bottom sweep in
    ├─ 0.3s  → "B" letter stroke draws
    ├─ 0.8s  → Corner ornaments fade in
    ├─ 0.8s  → "X" strokes draw
    ├─ 1.0s  → "X2" cross strokes draw
    ├─ 1.3s  → "A" letter draws
    ├─ 1.5s  → "R1" first R draws
    ├─ 1.8s  → "R2" second R draws + Underline sweeps
    ├─ 2.1s  → Dot 1 appears
    ├─ 2.3s  → Dot 2 appears
    └─ 2.8s  → "Made By Naivedh Patel" label fades in
         │
         └─ 2s+ → ALL paths begin gold shimmer loop (infinite)
```

---

## 🌗 Color Palette

| Name | Hex | Usage |
|---|---|---|
| **Deep Navy** | `#020818` | Body background |
| **Midnight Blue** | `#020c24` | Card background |
| **Royal Gold** | `#d4af37` | Primary stroke color |
| **Bright Gold** | `#ffd700` | Shimmer highlight |
| **Pale Gold** | `#ffe066` | Shimmer peak |
| **Dark Gold** | `#b8860b` | Shimmer shadow |

---

## 📸 Preview

> Open `Index.html` in any browser to see the signature animate from scratch on every page load.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Made with ❤️ by Naivedh Patel**

*If you found this helpful, give it a ⭐ on GitHub!*

</div>
#   s i g n a t u r e  
 