# Refresh: release and QA notes

All six content pages have five named sections. About is a company page, without photos or founder metadata. The main navigation, legacy page URLs and existing WhatsApp destinations stay in place. Examples are labelled and no enrolment dates, prices, clients or project outcomes are invented.

## Defensive review

- Reviewed application routes, the contact link builder, metadata, image handling, dependency lockfile and CI configuration. The current branch has no site forms, API routes, accounts, database, uploads or third-party scripts. WhatsApp and telephone links require explicit user action. The server does not handle messages.
- Static responsive WebPs replace request-time image processing. Next's public image optimizer is disabled. Removed unused legacy public images, including portrait files. This does not remove files from old Git history or previously published deployments.
- CSP restricts resource origins and denies objects, frames and form posts. The static Next bootstrap still needs inline script and style allowances. This is not a nonce-based CSP. Preview responses explicitly request `noindex, nofollow`.
- Updated development tools and transitive dependencies. Run both `npm audit` and `npm audit --omit=dev` for current advisories. Results apply to this lockfile, not to the separately deployed production branch. GitHub reported unresolved default-branch alerts during review; check and close them through remediation in the live release process, not by marking them dismissed.
- Verify Vercel and GitHub account access, domain ownership, deployment protection and any legacy production environment variables before production promotion. The source and dependency review is not a guarantee of zero risk.

## Checks

Run `npm test`, `npm run lint`, `npm run build`, `npm run type-check`, then `npm run test:smoke` against the production build. The smoke suite checks each offer, contact links, section labels, retired portrait URLs, security headers and image optimization endpoint state. Browser checks cover every route at 320, 768 and 1280 px, plus the menu, Escape/focus, active route, training FAQ and reduced motion. Local Chromium request counts are not field Core Web Vitals.
