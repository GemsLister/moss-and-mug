# Moss & Mug

A warm, responsive neighborhood café landing page built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server & build tool
- **Tailwind CSS v4** — utility-first styling
- **lucide-react** — icons

## Getting Started

```bash
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

## Project Structure

```
src/
├── App.tsx                        # page composition
├── index.css                      # tailwind config, brand colors, animations
├── assets/                        # images & logo
├── components/
│   ├── buttons/
│   │   └── PrimaryButton.tsx
│   ├── layouts/
│   │   ├── Header.tsx             # nav + animated mobile menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx        # full-bleed image + floating card
│   │   ├── MenuSection.tsx        # coffee bar + kitchen menus
│   │   ├── StorySection.tsx       # interior image + story panel
│   │   └── CtaSection.tsx         # visit CTA banner
│   └── ui/
│       └── Reveal.tsx             # scroll-triggered animation wrapper
```

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-bleed café image with a floating text card, plus a 01–04 feature bar |
| **Menu** | "The coffee bar" and "Fresh from our kitchen" lists with prices |
| **Story** | Interior photo alongside the brand story on a dark green panel |
| **CTA** | "There's a cup with your name on it." banner |
| **Footer** | Brand, contact, hours, and friendly reminder with back-to-top |

## Design Tokens

Defined in `src/index.css` under `@theme`:

| Token | Hex |
|-------|-----|
| `brand-darkgreen` | `#1f3f28` |
| `brand-green` | `#56815b` |
| `brand-lightgreen` | `#e5f0e1` |
| `brand-white` | `#faf8ed` |
| `brand-tan` | `#e8d5a8` |
| `brand-yellow` | `#d4a94a` |

## Animations

- **Reveal component** — `fade-up`, `fade-in`, `scale-in` triggered by `IntersectionObserver` on scroll.
- **Hero** — image fades in, floating card fades up.
- **Mobile menu** — overlay fades in, close button rotates in, links stagger-slide from the left, CTA slides up.
- **Hover** — image zoom, arrow nudges, color/scale transitions.
- All animations respect `prefers-reduced-motion`.

## Responsiveness

- **Mobile** — single-column, full-bleed hero image with static card, 2×2 feature grid, animated full-screen menu.
- **Tablet (`md`)** — hero card floats over the image, 2-column feature row.
- **Desktop (`lg`)** — wider card, 4-column feature row, side-by-side story layout.
