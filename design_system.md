# Trinity Supermarket Design System

## Overview

The Trinity Supermarket project implements a responsive e-commerce homepage with a modern, clean design focused on usability and visual hierarchy. The design system emphasizes a nature-inspired green color palette, smooth animations, and mobile-first responsive layouts. Key features include product sliders, search modals, cart/wishlist functionality, and category browsing.

## 🎨 Color Palette

### Primary Colors

| Color         | Hex       | Usage                                          |
| ------------- | --------- | ---------------------------------------------- |
| Primary Green | `#16a34a` | Buttons, accents, hover states, category links |
| Dark Green    | `#065f46` | Footer background, hero button hover           |
| Success Green | `#4ade80` | Hover states for buttons                       |
| Darker Green  | `#166534` | Hero button background                         |
| Footer Green  | `#22543d` | Footer background                              |
| Light Green   | `#10b981` | Links, underlines                              |

### Secondary Colors

| Color       | Hex       | Usage                     |
| ----------- | --------- | ------------------------- |
| White       | `#ffffff` | Backgrounds, text on dark |
| Black       | `#000000` | Primary text              |
| Light Gray  | `#f9fafb` | Testimonial backgrounds   |
| Border Gray | `#e5e7eb` | Borders                   |
| Dark Text   | `#111827` | Headings                  |
| Medium Text | `#4b5563` | Body text                 |

### Status Colors

| Color        | Hex               | Usage                       |
| ------------ | ----------------- | --------------------------- |
| Error/Remove | `#dc2626`         | Cart count, decrease button |
| Wishlist     | `#e74c3c`         | Heart icon hover/active     |
| Cart Success | `rgba(0,0,0,0.5)` | Modal overlays              |

## 📝 Typography

### Font Family

- **Primary**: `Poppins` (imported from Google Fonts with full weight range: 100-900)
- **Fallback**: `sans-serif`

### Font Sizes & Weights

| Element        | Size                                      | Weight                    | Line Height |
| -------------- | ----------------------------------------- | ------------------------- | ----------- |
| Hero Title     | `3rem` (desktop) / `1.25-2.5rem` (mobile) | `bold` (700-900)          | `1.6`       |
| Section Titles | `20px`                                    | `bold` (700)              | `1.6`       |
| Product Names  | `~14-16px`                                | `normal` (400)            | `1.6`       |
| Product Price  | `~16px`                                   | `bold` (600)              | `1.6`       |
| Body Text      | `14-16px`                                 | `normal` (400)            | `1.6`       |
| Small Text     | `12-14px`                                 | `normal/italic` (400/500) | `1.6`       |

### Text Hierarchy

```
h1.hero-title - Largest, italic bold for hero
h2.section-title - Underlined green headings
h3.feature-title - Feature cards
h4.popular-products-title - Section subtitles
p.product-name/price - Product details
span/small - Secondary info, labels
```

## 📐 Layout & Spacing

### Container System

- **Max Width**: `1400px` (`.container`)
- **Padding**: `1rem` sides (responsive)
- **Layout Methods**: Flexbox (primary), CSS Grid (minimal), inline-block for products

### Spacing Scale

| Size | Value                | Usage                                |
| ---- | -------------------- | ------------------------------------ |
| XS   | `0.5rem` (8px)       | Icon gaps, button padding            |
| S    | `1rem` (16px)        | Section padding, margins             |
| M    | `1.5-2rem` (24-32px) | Component spacing, gaps              |
| L    | `3-5rem` (48-80px)   | Hero margins, section tops           |
| XL   | `10rem+`             | Large hero heights (mobile adaptive) |

### Grid Patterns

```
- Header: flex space-between
- Features: 2x2 flex grid (wrap)
- Categories: flex wrap, 7 items
- Products: flex nowrap horizontal scroll (slider)
- Testimonials: flex nowrap horizontal scroll
```

## 🧱 Components

### 1. Header/Navigation

```
- Fixed position (top:0, z:20)
- Responsive: Mobile hamburger → Desktop full nav
- Search modal (scale animation)
- Cart count badge (absolute positioned)
```

### 2. Hero Section

```
- Full-width background image
- Left-aligned content (desktop)
- Responsive height: 13rem→700px
- CTA button with hover scale
```

### 3. Product Cards

```
.product-item (200px width)
├── .product-image (150x150px, contain)
├── .product-name (left text)
├── .product-details
│   ├── .product-price (bold)
│   ├── .quantity-controls (hidden→flex)
│   └── .add-to-cart-btn (full width)
└── .product-icons (absolute overlay: heart/eye)
```

### 4. Sliders/Carousels

```
- Horizontal scroll flex containers
- Custom prev/next buttons (absolute)
- Scroll-behavior: smooth
- Scrollbar hidden (webkit/firefox)
```

### 5. Modals

```
- Fixed full-screen overlays
- Cart/Wishlist success modals
- Search results dropdowns
- Scale/scaleY animations
```

### 6. Category Cards

```
7 equal cards (7.5rem→9.5rem width)
- Image + text + link
- Hover: scale(1.05) + border accent
- "Coming Soon" disabled state
```

## 🎭 Interactions & Animations

### Hover Effects

```
Buttons: background lighten + scale(1.02-1.05)
Cards: scale(1.05) + shadow
Icons: color change + scale(1.1)
Links: underline + color shift to #10b981
```

### Transitions

```
All: 0.3s ease-in-out
Transform, background-color, opacity
Custom keyframe animations:
- modal-search/modal-hidden (scaleY)
- scale-in-tr/out-tr (hamburger menu)
- slider (0.5s)
- pulsate-bck-normal (loader)
```

### Modal Animations

```
@keyframes modal-search { scaleY(0→1), origin top }
@keyframes modal-hidden { scaleY(1→0) }
@keyframes scale-in-tr/out-tr { scale(0↔1) }
```

## 📱 Responsive Design

### Breakpoints

```
320-768px: Mobile (hamburger, full-width search modal)
420px+: Hero grows taller
614px+: Partial desktop nav
741px+: Larger hero/content
769px+: Desktop search bar
900px+: Larger hero (30rem)
1000px+: Full desktop layout
1401px+: Constrained 1400px max-width
```

### Mobile-First Features

```
- Touch-friendly buttons (30px+)
- Swipeable sliders (scroll)
- Collapsible menus/modals
- Adaptive typography/image sizes
- Hidden desktop elements (icons→text)
```

## 🔧 Visual Elements

### Icons

- **Font Awesome 6.7.2** (solid/regular)
- **Google Material Symbols**
- Usage: cart, heart, eye, search, menu, arrows

### Images

```
- Product: object-fit:contain (150px)
- Hero: cover full-width
- Categories: 7.5rem width
- Avatars: 3rem circular (testimonials)
- Loader: 90px centered
```

### Shadows & Borders

```
Cards: 0 10px 15px rgba(0,0,0,0.1)
Header: 0 2px 4px rgba(0,0,0,0.1)
Modals: 0 4px 20px rgba(0,0,0,0.15)
Borders: 2px #fefdf8 → #10b981 (hover)
```

## 🎯 Design Principles

1. **Consistency**: Uniform green palette, Poppins throughout
2. **Accessibility**: High contrast, readable sizes, hover states
3. **Performance**: Smooth 60fps animations, optimized images
4. **Mobile-First**: Progressive enhancement to desktop
5. **E-commerce UX**: Clear CTAs, fast feedback (modals), intuitive navigation
6. **Brand Identity**: Green/nature theme matching supermarket freshness

## 🛠 Implementation Notes

- **CSS**: Utility-first with custom components, minimal JS coupling
- **JS**: Vanilla DOM manipulation, localStorage for cart/wishlist
- **Grid/Flex**: Modern layout without heavy frameworks
- **Animations**: CSS transforms/transitions (no heavy libraries)
- **Responsive**: Fluid scaling + media queries

This design system creates a professional, trustworthy e-commerce experience optimized for conversion and user satisfaction.
