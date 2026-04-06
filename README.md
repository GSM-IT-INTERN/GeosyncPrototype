# GEOSYNC — GeoSpectrum Portal

A Vite + React frontend for the GeoSync organizational workflow platform.

## Stack

- **Vite** — build tool & dev server
- **React 18** — UI library
- **React Router v6** — client-side routing
- **Plain CSS** — modular per-component CSS files (no Tailwind, no CSS-in-JS)

---

## Project Structure

```
geosync/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx               # App entry point
    ├── App.jsx                # Route declarations
    ├── index.css              # Global styles & CSS design tokens
    │
    ├── components/
    │   ├── GeoSyncLogo.jsx    # SVG logo + wordmark
    │   ├── AuthLayout.jsx     # Two-panel auth shell (sidebar + form area)
    │   ├── AuthLayout.css
    │   ├── FormInput.jsx      # Reusable labeled input (supports password toggle)
    │   ├── FormInput.css
    │   ├── Button.jsx         # Reusable button (variants: primary/secondary/ghost)
    │   └── Button.css
    │
    └── pages/
        ├── LoginPage/
        │   ├── LoginPage.jsx
        │   └── LoginPage.css
        ├── RegisterPage/
        │   ├── RegisterPage.jsx
        │   └── RegisterPage.css
        ├── ForgotPasswordPage/
        │   ├── ForgotPasswordPage.jsx
        │   └── ForgotPasswordPage.css
        └── DashboardPage/
            ├── DashboardPage.jsx
            └── DashboardPage.css
```

---

## Routes

| Path               | Component            | Description                        |
|--------------------|----------------------|------------------------------------|
| `/`                | → redirect           | Redirects to `/login`              |
| `/login`           | `LoginPage`          | Main login screen (matches mockup) |
| `/register`        | `RegisterPage`       | New account registration           |
| `/forgot-password` | `ForgotPasswordPage` | Password reset request + success   |
| `/dashboard`       | `DashboardPage`      | Post-login dashboard               |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Design Tokens

All colors, typography, spacing, shadows, and transitions are defined as CSS custom properties in `src/index.css` under `:root`. Update them in one place to restyle the entire app.

Key tokens:
- `--color-navy` / `--color-navy-mid` — primary brand dark blue
- `--color-sky` / `--color-sky-light` — interactive / accent blue
- `--font-display` — `Barlow Condensed` (headings, labels, logo)
- `--font-body` — `Barlow` (body text, features)
- `--font-ui` — `Inter` (form labels, small UI text)

---

## Adding New Screens

1. Create a folder under `src/pages/YourPage/`
2. Add `YourPage.jsx` and `YourPage.css`
3. If it's an auth screen, wrap with `<AuthLayout>` — pass `panelTitle` and `panelSubtitle`
4. Register the route in `src/App.jsx`
