<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# Project Guidelines

## Tech Stack
- Next.js (App Router)
- TypeScript
- MUI System (no Material UI default components)
- Emotion for styling
- Framer Motion for animations

## Architecture
- Use `src/` structure
- Separate:
    - components/
    - sections/
    - theme/
    - layout/

## Styling Rules
- Do NOT hardcode colors
- Always use theme tokens
- Avoid Material UI default styling
- Prefer clean, minimal, premium UI
- Do NOT use inline styles unless strictly necessary
- Prefer styled components or `sx` with theme tokens
- Maintain consistent spacing using theme spacing

## Typography
- Use Next.js font optimization (`next/font`)
- Do NOT use external font links or `@import`
- Define fonts in `layout.tsx` using `variable`
- Connect fonts through theme (not inline usage)
- Use:
  - serif font for headings
  - sans-serif font for body text

## MUI Usage
- Use MUI System (`Box`, `Stack`, etc.)
- Avoid prebuilt Material UI components unless customized
- All styling must go through theme

## Components
- Prefer small, reusable components
- Avoid large monolithic components

## UX Principles
- Minimalist design
- Spacious layout
- Subtle animations only

## Performance
- Prefer server components when possible
- Avoid unnecessary client components

## Rendering Rules
- Default to Server Components
- Use "use client" ONLY when necessary:
  - interactivity (`onClick`, `useState`, etc.)
  - animations (Framer Motion)
  - browser-only APIs
- Never convert entire pages to client components unnecessarily

## Before coding
Always check Next.js documentation inside:
node_modules/next/dist/docs/