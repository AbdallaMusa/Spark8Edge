# Spark8Edge

> Empowering Kenya’s Next Generation through AI & Strategic Brand Intelligence.

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

## ✅ Recent Updates

- **Vercel Analytics Integration**: Added `@vercel/analytics` to track visitor data and page views directly from the Vercel dashboard.
- **Vercel Speed Insights**: Integrated `@vercel/speed-insights` to monitor and improve Core Web Vitals (LCP, FCP, CLS) based on real user data.
- **Performance Enhancements**:
  - Added the `priority` prop to hero section images in `src/app/page.tsx` to improve the Largest Contentful Paint (LCP) score.
  - Removed a redundant Google Fonts `@import` from `globals.css` to rely exclusively on the more performant `next/font` implementation.
  - Created `src/app/loading.tsx` to provide an instant loading UI for data-heavy pages, improving the First Contentful Paint (FCP) and user experience.
