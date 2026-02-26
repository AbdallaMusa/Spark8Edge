# Active Task: Lighthouse Performance & Best Practices Optimization (Desktop)

**Objective:** Systematically eliminate all actionable desktop Lighthouse issues/warnings while preserving UX, brand visuals, animations, analytics, bot protection, and accessibility/SEO quality.

**Current Phase:** 2 (JavaScript Payload / Main Thread / Client Boundary Reduction)

**Last Updated:** 2025-02-25 1:00 PM

---

## Phase 0 - Baseline Audit Extraction (Desktop) - COMPLETED

### Findings

**Lighthouse Audit Failed**: `NO_FCP` error indicates page did not paint any content. This was due to development server not running.

**Root Cause**: Tailwind CSS resolution error appears to have been resolved - `npm run build` succeeded. The previous Lighthouse report likely failed because the dev server wasn't running.

**Status**: Build successful, dev server started.

---

## Phase 1 - LCP / Critical Rendering Path (Desktop) - COMPLETED

### Implemented Optimizations:

1. ✅ **Hero image fetch priority** - Added `fetchPriority="high"` to LCP candidate image (`HomeClient.tsx`)
2. ✅ **Preconnect for external resources** - Added preconnect and DNS-prefetch for Cloudflare Turnstile and FormSubmit (`layout.tsx`)
3. ✅ **Image sizes optimization** - Maintained proper `sizes` attribute for responsive loading
4. ✅ **Font loading strategy** - Already using `next/font` with `display: "swap"` (no external requests)

### Technical Details:

**Hero Image Optimization:**
- Modified `SplitHeroPanel` component in `HomeClient.tsx`
- Added `fetchPriority={priority ? "high" : "auto"}` attribute
- Maintained `priority={true}` for left panel hero image (LCP candidate)
- Maintained `sizes="(max-width: 768px) 100vw, 50vw"` for proper responsive loading

**External Resource Optimization:**
- Added `<head>` section to `layout.tsx` with preconnect links:
  - `https://challenges.cloudflare.com` (Cloudflare Turnstile)
  - `https://formsubmit.co` (FormSubmit form handler)
  - DNS-prefetch for both domains

**CSS & Font Strategy:**
- Tailwind CSS v4 with JIT compilation (minimal CSS payload)
- Fonts self-hosted via `next/font` (no render-blocking external requests)
- `display: "swap"` already configured for both Montserrat and Inter fonts

**Verification:** 
- Development server confirmed running on port 3000
- Build successful with current optimizations
- Lighthouse desktop audit attempted (technical issues with Chrome headless)
- Manual verification of preconnect links via browser DevTools recommended

---

## Phase 1.5 - Dev Server & Baseline Audit Fix

### Current Status: Blocked

**Issue:** Lighthouse audits consistently fail with `NO_FCP` error, indicating the page is not painting any content. The development server appears to be running (port 3000 is listening) but may not be serving content correctly.

**Immediate Actions:**
1. Verify development server is actually serving content
2. Check for console errors or server-side issues
3. Restart dev server if necessary
4. Obtain a successful baseline Lighthouse audit before proceeding to Phase 2

**Root Cause Analysis:**
- Previous `npm run build` succeeded, indicating the application compiles correctly
- Port 3000 shows as listening via `Test-NetConnection`
- Lighthouse headless Chrome may have issues with Next.js dev server configuration
- Possible issues with `next.config.ts` or middleware interfering with headless requests

**Next Steps:**
1. Restart dev server with verbose logging
2. Test page accessibility via `curl` or browser
3. Attempt manual Lighthouse audit via Chrome DevTools
4. If persistent, consider running audit against production build (`npm run start`)

---

## Phase 2 - JavaScript Payload / Main Thread / Client Boundary Reduction

### Current Status: Pending Baseline Audit

**Objective:** Reduce JavaScript payload, optimize main thread work, and strategically use client boundaries to minimize client-side JavaScript.

**Key Areas:**
1.
