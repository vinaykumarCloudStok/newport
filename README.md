# Vinay Kumar — Portfolio

Premium animated portfolio for a Frontend Lead Developer specializing in React.js,
Socket.io, and real-time casino game systems.

## Stack
- React 18 + TypeScript
- Vite
- Framer Motion (animations)
- Plain CSS (component-scoped + global tokens)

## Getting Started
```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the build
```

## Editing Content
All text lives in **`src/data/content.ts`** — name, contact links, skills,
experience, projects, services, testimonials. Edit that one file to update the site.

### Before deploying, replace placeholders:
- `github` URL in `src/data/content.ts`
- Project "Live Demo" / "GitHub" links in `src/components/Projects.tsx`

## Folder Structure
```
src/
  App.tsx
  main.tsx
  data/
    content.ts          # all editable content
  styles/
    global.css          # design tokens + base styles
  components/
    Loader.tsx
    Navbar.tsx / .css
    Hero.tsx / .css
    Section.tsx         # reusable animated section wrapper
    About.tsx / .css
    useCountUp.ts       # animated counter hook
    Skills.tsx / .css
    Experience.tsx / .css
    Projects.tsx / .css
    Services.tsx / .css
    Testimonials.tsx / .css
    Contact.tsx / .css
    Footer.tsx
```

## Deploy
Works out of the box on Vercel or Netlify — build command `npm run build`,
output directory `dist`.
