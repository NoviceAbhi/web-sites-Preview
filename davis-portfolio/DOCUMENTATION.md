# Davis Portfolio - Technical Documentation

## Overview
A modern, animated personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. The project features a contemporary design with smooth animations, dark/light theme toggle, and responsive layout.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## Project Structure
```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page combining all sections
├── components/
│   ├── Navigation.tsx       # Header navigation with theme toggle
│   ├── Hero.tsx            # Landing section with profile
│   ├── About.tsx           # About section with skills
│   ├── Services.tsx        # Services offered
│   ├── Portfolio.tsx       # Project showcase with filtering
│   ├── Contact.tsx         # Contact form and information
│   └── Footer.tsx          # Footer with social links
└── lib/
    └── utils.ts            # Utility functions
```

## Component Architecture

### 1. Navigation Component (`Navigation.tsx`)
**Purpose**: Fixed header with navigation links, theme toggle, and mobile menu.

**Key Features**:
- Responsive design with mobile hamburger menu
- Dark/light theme toggle with smooth transitions
- Glass morphism effect on scroll
- Smooth scroll to sections

**Code Explanation**:
```typescript
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```
- Tracks scroll position to apply glass effect
- Uses `useEffect` for scroll event listener with cleanup

### 2. Hero Component (`Hero.tsx`)
**Purpose**: Main landing section with animated introduction and profile photo.

**Key Features**:
- Animated background elements using Framer Motion
- Staggered text animations with `containerVariants` and `itemVariants`
- Profile photo positioned below main heading
- Social media links with hover animations

**Animation System**:
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
```
- Parent container controls child animation timing
- `staggerChildren` creates sequential reveal effect

### 3. About Component (`About.tsx`)
**Purpose**: Personal information with animated skill bars and feature cards.

**Key Features**:
- Animated progress bars showing skill levels
- Grid layout with responsive design
- Feature cards with hover effects
- Intersection Observer for scroll-triggered animations

**Skill Bar Animation**:
```typescript
<motion.div
  initial={{ width: 0 }}
  whileInView={{ width: `${skill.level}%` }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: index * 0.1 }}
  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
/>
```
- Animates width from 0 to skill percentage
- Uses `whileInView` for scroll-triggered animation
- Staggered delays for sequential loading

### 4. Services Component (`Services.tsx`)
**Purpose**: Showcase of services offered with interactive cards.

**Key Features**:
- Grid layout with hover animations
- Service cards with feature lists
- Gradient backgrounds and icons
- Hidden "Learn More" buttons revealed on hover

**Card Hover Effects**:
```typescript
whileHover={{ y: -10, scale: 1.02 }}
className="group bg-white dark:bg-dark-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
```
- Combines Framer Motion animations with CSS transitions
- Uses `group` class for coordinated hover effects

### 5. Portfolio Component (`Portfolio.tsx`)
**Purpose**: Project showcase with category filtering and project cards.

**Key Features**:
- Dynamic filtering system with state management
- Animated project cards with overlay actions
- Responsive grid layout
- Technology tags for each project

**Filtering Logic**:
```typescript
const [activeFilter, setActiveFilter] = useState('all')
const filteredProjects = activeFilter === 'all' 
  ? projects 
  : projects.filter(project => project.category === activeFilter)
```
- Simple state-based filtering
- Re-renders grid when filter changes

### 6. Contact Component (`Contact.tsx`)
**Purpose**: Contact form with validation and contact information display.

**Key Features**:
- Controlled form inputs with React state
- Contact information cards with hover animations
- Form validation and submission handling
- Responsive two-column layout

**Form State Management**:
```typescript
const [formData, setFormData] = useState({
  name: '', email: '', subject: '', message: ''
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}
```
- Controlled components pattern
- Single handler for all form inputs

### 7. Footer Component (`Footer.tsx`)
**Purpose**: Site footer with social links and additional information.

**Key Features**:
- Social media icons with hover animations
- Quick navigation links
- Contact information
- Animated heart icon

## Styling System

### Tailwind Configuration (`tailwind.config.ts`)
```typescript
theme: {
  extend: {
    colors: {
      primary: { 50: '#f0f9ff', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8' },
      dark: { 900: '#0f172a', 800: '#1e293b', 700: '#334155' }
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'slide-up': 'slideUp 0.6s ease-out',
      'float': 'float 6s ease-in-out infinite',
    }
  }
}
```

### Global Styles (`globals.css`)
- Custom CSS classes for reusable patterns
- Gradient text utility: `.gradient-text`
- Glass morphism effect: `.glass-effect`
- Hover lift animation: `.hover-lift`
- Custom scrollbar styling

## Animation Patterns

### 1. Scroll-Triggered Animations
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
```
- Elements animate when they enter viewport
- `viewport={{ once: true }}` prevents re-triggering

### 2. Staggered Animations
```typescript
transition={{ delay: index * 0.1 }}
```
- Creates sequential reveal effects
- Multiplies index by delay value

### 3. Hover Interactions
```typescript
whileHover={{ scale: 1.05, y: -5 }}
whileTap={{ scale: 0.95 }}
```
- Immediate feedback on user interaction
- Combines scale and position changes

## Responsive Design

### Breakpoint Strategy
- Mobile-first approach using Tailwind's responsive prefixes
- Key breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Grid layouts adapt from 1 column to 2-4 columns

### Mobile Navigation
```typescript
{isOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="md:hidden glass-effect rounded-lg mt-2 p-4"
  >
```
- Conditional rendering based on state
- Smooth slide-down animation

## Performance Optimizations

### 1. Animation Performance
- Uses `transform` and `opacity` for GPU acceleration
- Avoids animating layout-triggering properties
- `viewport={{ once: true }}` prevents unnecessary re-animations

### 2. Component Structure
- Server Components by default (Next.js 14)
- Client components only where interactivity is needed
- Minimal JavaScript bundle size

### 3. Image Optimization
- Placeholder gradients instead of actual images
- Ready for Next.js Image component integration

## Theme System

### Dark/Light Mode Implementation
```typescript
const toggleTheme = () => {
  setIsDark(!isDark)
  document.documentElement.classList.toggle('dark')
}
```
- Uses Tailwind's dark mode class strategy
- Toggles `dark` class on document root
- CSS transitions handle smooth color changes

## Development Workflow

### 1. Setup Commands
```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run lint        # Run ESLint
```

### 2. File Organization
- Components are self-contained with their logic
- Shared utilities in `lib/` directory
- Global styles in `app/globals.css`

### 3. TypeScript Integration
- Strict type checking enabled
- Interface definitions for props and data structures
- Type-safe event handlers and state management

## Customization Guide

### 1. Colors and Branding
- Update `tailwind.config.ts` for color scheme
- Modify gradient classes in components
- Change brand name in Navigation and Footer

### 2. Content Updates
- Replace placeholder text in each component
- Update project data in Portfolio component
- Modify contact information in Contact and Footer

### 3. Adding New Sections
- Create new component in `src/components/`
- Import and add to `page.tsx`
- Update navigation links in Navigation component

## Browser Support
- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Framer Motion requires JavaScript enabled

## Deployment
- Optimized for Vercel deployment
- Static generation where possible
- Environment variables for contact form integration

This documentation provides a comprehensive overview of the codebase structure, implementation details, and customization options for the Davis Portfolio website.