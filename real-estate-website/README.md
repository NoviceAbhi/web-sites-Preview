# HomeList - Real Estate Website

[![Live Website](https://img.shields.io/badge/🌐_Live_Website-Visit_Now-blue?style=for-the-badge)](https://hosting-8j9o-nknih046j-mr-novices-projects.vercel.app/)

A modern, responsive real estate website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🏠 Modern hero section with property search
- 🔍 Featured properties showcase
- 📱 Fully responsive design
- 🎨 Clean and professional UI
- 📧 Contact form
- 🏢 About section with company stats
- 🗂️ Properties listing page

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Images:** Next.js Image optimization

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── properties/
│       └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── PropertyCard.tsx
│   ├── FeaturedProperties.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## Pages

- **Home (/):** Main landing page with hero, featured properties, about, and contact sections
- **Properties (/properties):** Complete properties listing with search functionality

## Customization

- Update property data in the components
- Modify colors in `tailwind.config.ts`
- Add new pages in the `app` directory
- Customize components in the `components` directory

## Development Timeline

- **Initial Development:** 45 minutes to create the complete site
- **Customization & Alterations:** 2-3 hours for modifications
- **Additional Time:** Can be extended based on specific customer requirements

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

Then deploy to your preferred hosting platform.