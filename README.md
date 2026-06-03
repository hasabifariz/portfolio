# 🍊 Portfolio — Fariz
**Angular 17 · Tailwind CSS · GSAP ScrollTrigger · Elms Sans**

---

## Stack
- **Framework**: Angular 17 (standalone components)
- **Styling**: Tailwind CSS v3
- **Animations**: GSAP 3 + ScrollTrigger plugin
- **Font**: Elms Sans via `@fontsource/elms-sans`

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
ng serve
```
Buka `http://localhost:4200`

### 3. Build production
```bash
ng build
```

---

## Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── navbar/         ← Fixed navbar, hide on scroll down / show on scroll up
│   │   ├── hero/           ← Stagger text entrance animation
│   │   ├── about/          ← Slide-in from left/right on scroll
│   │   ├── skills/         ← Card stagger + skill bar fill on scroll
│   │   ├── projects/       ← Cards stagger + 3D tilt on hover
│   │   ├── timeline/       ← Items slide in from left on scroll
│   │   └── footer/         ← Links + copyright
│   └── app.component.ts    ← Root shell
├── styles/
│   └── global.css          ← Tailwind + CSS variables + base styles
└── main.ts                 ← Bootstrap
```

---

## GSAP Animations

| Section    | Animation |
|------------|-----------|
| Navbar     | Slide down entrance · Hide/show on scroll direction |
| Hero       | Stagger fade-up for each element (eyebrow → title → role → desc → btns) |
| About      | Left panel slides from left · Right panel slides from right |
| Skills     | Cards stagger up · Skill bars fill width on scroll enter |
| Projects   | Cards stagger up · 3D tilt on mouse move · Scale on hover |
| Timeline   | Items slide in from left with stagger |

---

## Customization

### Ubah warna accent
Di `src/styles/global.css` dan `tailwind.config.js`:
```css
--color-orange: #E8541A;  /* Ganti hex ini */
```

### Ubah font
1. Install: `npm install @fontsource/[font-name]`
2. Import di `index.html`
3. Update `--font-primary` di `global.css`
4. Update `fontFamily.sans` di `tailwind.config.js`

### Tambah project baru
Di `projects.component.ts`, tambah item ke array `projects[]`.

### Tambah timeline item
Di `timeline.component.ts`, tambah item ke array `items[]`.

---

## Font Info
**Elms Sans** — utilitarian geometric sans serif.  
Via npm: `@fontsource/elms-sans`  
Supports weight: 100–900 (variable font)

---

## Notes
- Semua components menggunakan **standalone API** (Angular 17)
- GSAP ScrollTrigger di-register di tiap component yang membutuhkan
- Responsive: mobile-first dengan Tailwind breakpoints
