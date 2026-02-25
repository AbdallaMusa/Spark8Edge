# System Architecture

## Tech Stack

- **Framework:** Next.js v16
- **Core UI:** React v19, TypeScript v5
- **Styling:** Tailwind CSS v4, `clsx`, and `tailwind-merge` for class utility management
- **Animations:** Framer Motion (`framer-motion`) and `tw-animate-css`
- **Icons:** Lucide React (`lucide-react`)
- **Theming:** `next-themes` (supports dark/light mode switching)

## Security & Infrastructure

- **Bot Protection:** `@marsidev/react-turnstile` using site key `0x4AAAAAACMhAS1DKNYMAxXh`
- **Analytics/Monitoring:** `@vercel/analytics` and `@vercel/speed-insights`

## Technical Rules

- Follow Next.js 16 best practices.
- Ensure all new components use Tailwind CSS v4 for styling and Lucide for icons.
- Maintain TypeScript strict typing across all components.
