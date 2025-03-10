

# Centrum Reklamowe Wrocław

A modern SvelteKit website for a printing and advertising services company in Wrocław, featuring responsive design, service showcase, and contact form functionality.

## Project Overview

This project is a business website built with SvelteKit for a printing and advertising services company. It features a clean, modern design with multiple sections showcasing services, portfolio items, and company information.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Service showcase with detailed subpages
- Portfolio gallery
- Contact form with validation
- Modern UI components
- SEO-friendly structure

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: CSS with variables for theming
- **Deployment**: Ready for static site generation or server-side rendering
- **Form Handling**: Server actions for contact form processing

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── about/        # About section components
│   │   ├── contact/      # Contact form and section
│   │   ├── hero/         # Hero section components
│   │   ├── portfolio/    # Portfolio gallery components
│   │   ├── services/     # Service-related components
│   │   └── ui/           # Reusable UI components
│   │       ├── form/     # Form elements
│   │       └── layout/   # Layout components
│   ├── data.ts           # Mock data for the site
│   ├── globals.css       # Global styles
│   └── types.ts          # TypeScript type definitions
└── routes/               # SvelteKit routes
    ├── uslugi/           # Service pages
    │   └── [slug]/       # Dynamic service pages
    ├── +layout.svelte    # Main layout
    ├── +page.svelte      # Home page
    └── +page.server.ts   # Server-side logic
```

