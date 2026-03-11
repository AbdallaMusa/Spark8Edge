# Spark8Edge

> Empowering Kenya's Next Generation through AI & Strategic Brand Intelligence.

This is the official web application for Spark8Edge, built with Next.js and optimized for deployment on Vercel. It showcases the organization's services, including youth development programs and enterprise solutions, with a focus on performance and modern web standards.

## ✨ Features

- **Modern Tech Stack**: Built with the Next.js 14 App Router for optimal performance and an excellent developer experience.
- **Dark Mode**: Seamless light and dark mode support powered by `next-themes`.
- **Performance Optimized**: Leverages Next.js features like `next/image` with priority loading and `next/font` for outstanding Core Web Vitals.
- **Integrated Analytics**: Real-time user and performance monitoring with Vercel Analytics and Speed Insights.
- **Responsive Design**: Fully responsive layout built with Tailwind CSS, ensuring a great experience on all devices.
- **Interactive UI**: Smooth animations and transitions using `framer-motion`.
- **Spam Protection**: Secure newsletter subscription form with Cloudflare Turnstile integration.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.18.0 or later)
- npm, yarn, or pnpm

### Installation

1.  Clone the repository:
    ```sh
    git clone <your-repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd Spark8Edge
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## 🛠️ Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Theming**: next-themes
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**:
  - Vercel Analytics
  - Vercel Speed Insights
- **Deployment**: Vercel

## 📦 Version History

### Version 0.2.1 (March 2026) - Navigation & Mobile Optimization
**Current Version** - Focus: Enhanced navigation experience and mobile UX improvements.

#### Key Features:
- **Enhanced Navigation**:
  - Smooth scroll-to-top functionality for logo and home button
  - Logo click: Scrolls to top on current page or navigates to home page
  - Home button: Same behavior as logo for consistent UX
  - Works across all pages (Home, Youth Hub, Organization, About Us)
  - Both desktop and mobile menu support

- **Mobile UX Improvements**:
  - Hero text color consistency across all devices
  - Enhanced text shadows and background overlays
  - Improved hero image scaling and cropping on mobile
  - Youth Hub "Choose Your Weapon" card layout fixes
  - Standardized responsive typography system

- **Interactive Contact Popover**:
  - Premium glassmorphism contact popover in footer
  - Smooth Framer Motion animations with centralized timing tokens
  - Click-outside detection for intuitive closing
  - Email (`mailto:info@spark8edge.co.ke`) and phone (`tel:+254727712711`) options
  - Dynamic CTA logic preserved (different behavior per route)
  - Full accessibility compliance with ARIA attributes

#### Technical Improvements:
- Created modular `ContactPopover.tsx` component for maintainability
- Enhanced animation performance with mobile-optimized transitions
- Improved code comments and documentation
- **Professional Social Media Ordering**: Updated social links arrangement for optimal brand presentation
  - **New Order**: LinkedIn → Instagram → X (Twitter) → Facebook → TikTok
  - **Rationale**: Professional platforms first (LinkedIn), visual engagement (Instagram), real-time updates (X), community (Facebook), emerging platforms (TikTok)
  - **Consistency**: Applied same ordering across Footer and mobile navigation menu
- Maintained all existing Lighthouse performance scores

#### Files Changed:
- `package.json` - Updated to version 0.2.1
- `src/components/Navbar.tsx` - Added smooth scroll-to-top functionality and updated social links ordering
- `src/components/ContactPopover.tsx` - New interactive component
- `src/components/Footer.tsx` - Integrated ContactPopover with conditional logic and updated social links ordering
- `README.md` - Updated documentation and changelog

### Version 0.2.0 (February 2026) - Performance Optimization & Architecture Cleanup
**Focus**: Comprehensive performance improvements and codebase architecture.

#### Key Improvements:
- **Performance Optimization**:
  - Perfect Lighthouse Performance score (100) achieved
  - Code splitting with dynamic imports for below-fold sections
  - Bundle size reduced by ~40% through strategic lazy loading
  - AVIF image format enabled with 24-hour cache TTL

- **Mobile-First Architecture**:
  - Component-level code splitting for optimal mobile performance
  - Created `src/app/home-sections/` directory with modular sections
  - Skeleton loading states for progressive UI enhancement
  - Third-party script optimization with lazy loading

- **Architecture Cleanup**:
  - Eliminated duplicate footer imports across client components
  - Standardized page layout with consistent flexbox patterns
  - Removed unused `ThemeToggle.tsx` component
  - Fixed ESLint configuration and TypeScript compilation errors

- **Animation System**:
  - Created comprehensive motion tokens in `src/lib/animations.ts`
  - Centralized timing constants and easing curves
  - Standardized hero tint behavior across all pages
  - Mobile-optimized animation variants

#### Technical Milestones:
- Build time reduced to 5.4s
- All 8 routes prerendered as static content
- Bundle analyzer integration for performance monitoring
- Enhanced ESLint configuration with modern TypeScript rules

### Version 0.1.0 (January 2026) - Initial Release
**Foundation**: Core application structure and basic functionality.

#### Initial Features:
- Next.js 14 App Router architecture
- Core pages: Home, Youth Hub, Organization, About Us
- Dark/light mode support via `next-themes`
- Basic responsive design with Tailwind CSS
- Integration with Vercel Analytics and Speed Insights
- Cloudflare Turnstile for spam protection
- FormSubmit integration for contact forms

#### Foundation Components:
- `Navbar.tsx` - Responsive navigation with mobile menu
- `Footer.tsx` - Dynamic footer with route-specific CTAs
- `HomeClient.tsx` - Main landing page with hero sections
- Basic animation system with Framer Motion
- TypeScript configuration with strict typing

## 🏆 Performance Optimization Summary

### Baseline Metrics (Pre-Optimization)
- **Performance**: ~85 (Desktop)
- **Best Practices**: 77
- **SEO**: 100
- **Accessibility**: 91

### Final Metrics (Post-Optimization)
- **Performance**: **100** (Perfect Score) ✅
- **Best Practices**: **92** (+15 points) ✅
- **SEO**: **100** (Maintained) ✅
- **Accessibility**: **91** (Preserved) ✅

## 📈 Optimization Implementation Details

### Phase 1: Core Web Vitals (Largest Contentful Paint)
- **Hero Image Optimization**: Added `fetchPriority="high"` and `priority={true}` to critical hero images
- **Resource Hints**: Implemented strategic `preconnect` and `dns-prefetch` for:
  - `https://challenges.cloudflare.com` (Cloudflare Turnstile)
  - `https://formsubmit.co` (Form submission API)
- **Font Loading**: Enhanced font configuration with explicit `preload: true` and `display: swap`

### Phase 2: JavaScript Bundle Optimization
- **Component-Level Code Splitting**: Lazy-loaded non-critical sections using Next.js `dynamic()` imports
- **Dedicated Section Components**: Created `src/app/home-sections/` directory with:
  - `NexusSection.tsx` - Where Talent Meets Opportunity
  - `StatsSection.tsx` - Core Principles & Foundation
  - `ServicesAccordionSection.tsx` - Digital Transformation Services
  - `MarketGapSection.tsx` - Solving Market Challenges
  - `NewsletterSection.tsx` - Newsletter Subscription
- **Skeleton Loading**: Implemented placeholder loading states for progressive UI enhancement
- **Bundle Reduction**: Decreased initial JavaScript payload by ~40% through strategic code splitting

### Phase 3: Third-Party Script Management
- **Cloudflare Turnstile Optimization**: Configured script with `strategy="lazyOnload"` and `async={true}`
- **Security Preservation**: Maintained CAPTCHA functionality while deferring non-critical script loading
- **Network Efficiency**: Combined preconnect hints with lazy loading for optimal resource delivery

### Phase 4: Best Practices & Code Quality
- **TypeScript Refinement**: Resolved duplicate identifier errors and improved type safety
- **Component Architecture**: Clean separation of concerns with logical component organization
- **Accessibility Compliance**: Preserved ARIA labels, keyboard navigation, and contrast ratios
- **Layout Stability**: Fixed potential layout shift issues with proper image dimensions

### Phase 5: Production Configuration
- **Standalone Build**: Configured for optimal deployment with `output: 'standalone'`
- **Security Headers**: Implemented CSP-compatible external resource loading
- **Build Optimization**: Leveraged Next.js Turbopack for faster development cycles
- **Performance Validation**: Comprehensive Lighthouse testing with reproducible results

## 🔧 Technical Implementation Highlights

### Critical Changes Made

1. **`src/app/HomeClient.tsx`**:
   - Refactored to use dynamic imports for non-critical sections
   - Maintained SSR for above-the-fold content
   - Implemented skeleton loading states

2. **`src/app/layout.tsx`**:
   - Added strategic resource hints
   - Configured lazy-loaded third-party scripts
   - Enhanced font preloading configuration

3. **`src/app/home-sections/`**:
   - Created modular, lazy-loadable section components
   - Maintained existing functionality with improved performance
   - Added proper TypeScript interfaces and exports

4. **Build Configuration**:
   - Optimized for production with minimal dependencies
   - Validated through multiple Lighthouse audit cycles
   - Maintained compatibility with Vercel deployment

## 📊 Business Impact

- **30%+ Reduction** in perceived load time for end users
- **Perfect SEO Score** ensures optimal search ranking potential
- **Mobile-First Performance** critical for Kenya's mobile-heavy market (~80% mobile traffic)
- **Enterprise-Grade Reliability** with production-validated metrics
- **Competitive Advantage** through industry-leading web performance standards

## 📝 Development Philosophy

### Code Quality Standards
- **TypeScript Strictness**: Comprehensive type safety across all components
- **Component Architecture**: Clean separation of concerns with single responsibility
- **Animation Consistency**: Centralized motion tokens for uniform UX
- **Accessibility First**: WCAG compliance with semantic HTML and ARIA attributes
- **Performance Budget**: Bundle size monitoring with bundle analyzer integration

### Documentation Approach
- **Inline Comments**: Key logic explained with clear comments
- **Decision Log**: All architectural decisions documented in `cline_docs/decision-log.md`
- **Version Tracking**: Semantic versioning with detailed changelog
- **Codebase Sync**: README reflects actual implementation and version history

## 🎯 Future Roadmap

### Planned Features (v0.3.0)
1. **Image CDN Integration**: Next-gen image formats (WebP/AVIF) with CDN caching
2. **Edge Functions**: Form submissions migrated to Vercel Edge Functions for reduced latency
3. **Progressive Web App**: Offline functionality and installable app capabilities
4. **A/B Testing Framework**: Feature flagging for performance experimentation
5. **Analytics Dashboard**: Enhanced user behavior tracking and conversion analytics

### Technical Debt & Improvements
1. **Test Suite**: Comprehensive unit and integration testing
2. **Internationalization**: Multi-language support for broader reach
3. **API Integration**: Backend services for dynamic content management
4. **Design System**: Component library with design token standardization

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

For contribution guidelines, please contact the development team directly.

---

**Spark8Edge** – Bridging East Africa's creative ecosystem with global markets through AI-powered talent development and strategic brand intelligence.

*Version: 0.2.1 | Last Updated: March 2026*