# The Vertex Technologies

Marketing website for **The Vertex Technologies** — an AI-driven growth and transformation company building intelligent automation, data-driven marketing systems, and strategic consulting frameworks for ambitious businesses.

## Tech Stack

- **Framework:** TanStack Start (React 19, SSR)
- **Build tool:** Vite 7
- **Styling:** Tailwind CSS v4 + custom design tokens
- **Animations:** Framer Motion
- **UI primitives:** Radix UI + shadcn/ui
- **Routing:** TanStack Router (file-based)
- **Forms / Validation:** React Hook Form + Zod
- **Icons:** Lucide React

## Project Structure

```
src/
├── assets/              # Images, banners, brand assets
├── components/          # Reusable UI components
│   ├── ui/              # shadcn/ui primitives
│   ├── Navbar.tsx       # Mega-menu navigation
│   ├── Footer.tsx
│   ├── PageBanner.tsx   # Inner-page hero banner
│   ├── HeroVisual.tsx   # Animated hero columns
│   └── ...
├── routes/              # File-based routes
│   ├── __root.tsx       # Root layout
│   ├── index.tsx        # Homepage
│   ├── about.tsx
│   ├── services.tsx
│   ├── ai-solutions.tsx
│   ├── marketing-systems.tsx
│   ├── growth-consulting.tsx
│   ├── case-studies.tsx
│   ├── resources.tsx
│   └── contact.tsx
├── hooks/
├── lib/
└── styles.css           # Design tokens + Tailwind config
public/
└── fonts/               # Vin Sans Pro typeface
```

## Getting Started

### Prerequisites

- **Bun** (recommended) or Node.js 20+
- A package manager: `bun`, `npm`, or `pnpm`

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

The site will be available at `http://localhost:5173`.

### Production Build

```bash
bun run build
```

Output is generated in `.output/public`.

### Preview production build

```bash
bun run preview
```

## Deployment

### Vercel (recommended)

This repo is Vercel-ready. See [`DEPLOY_VERCEL.md`](./DEPLOY_VERCEL.md) for the full guide.

Quick steps:

1. Import the repo into Vercel.
2. Framework Preset: **Other**
3. Build Command: `vite build`
4. Output Directory: `.output/public`
5. Add env vars (if using Lovable Cloud / Supabase).

`vercel.json` already configures the build and adds an SPA fallback rewrite so deep links don't 404.

## Features

- ✨ Editorial hero section with vertical scrolling image columns
- 🧭 Mega-menu navigation (Services, Industries, Why Us) with image previews
- 📱 Fully responsive — mobile bottom nav + floating CTA buttons (WhatsApp / Call)
- 🎨 Custom design system with Vin Sans Pro typography
- 🎬 Scroll-triggered reveal animations
- 📄 Dedicated routes for SEO (every section is a real URL with its own metadata)
- 🖼️ Custom banner imagery on every inner page

## Brand

- **Primary:** Brand Red
- **Accents:** Blue, Orange, Green
- **Typography:** Vin Sans Pro (headings + body)
- **Tone:** Editorial, confident, modern

## License

This is a **private, proprietary project**. All rights reserved.
See [`LICENSE`](./LICENSE) for details.

## Contact

- **Website:** [thevertextechnologies.com](https://thevertextechnologies.com)
- **WhatsApp / Phone:** +92 321 1456419

---

© The Vertex Technologies. All rights reserved.
