# Spark8Edge

The public website for Spark8Edge, a Nairobi project offering practical training and building a creative talent network. It serves three audiences: learners, organisations with work to brief, and potential partners.

## Run locally

Use Node.js 22 and npm. No environment variables are required for the site.

```sh
npm ci
npm test
npm run lint
npm run type-check
npm run build
npm start
```

With the production build running in another terminal, run `npm run test:smoke`. Set `TEST_BASE_URL` to exercise a different host. The tests validate routes and contact URLs; they do not send messages or make calls.

## Site maintenance

- `src/app` contains the route copy. The existing homepage, Youth Hub, Organization and About URLs are preserved. The new partnership page is `/partnerships`.
- `src/config/contact.mjs` holds the public number, email and WhatsApp drafts. Confirm the destination with the team before changing or publishing it. This site does not collect form data or send messages automatically.
- `src/config/site.ts` defines the canonical domain used for metadata, sitemap and robots.
- Illustrative scenarios are labelled as such. Add dated, permissioned examples as real work becomes available; refresh the training page once the course, fee and intake details are confirmed.

## Vercel release checklist

1. In the existing project, check which deployment owns `www.spark8edge.co.ke`, the production branch, and the linked repo (`AbdallaMusa/Spark8Edge`). Do not move domains or change DNS just to produce a preview.
2. Use the Next.js preset, repo root, Node.js 22, `npm ci`, and `npm run build`. The redesign does not use the legacy Turnstile and form variables. Leave rollback configuration intact until the new release is stable.
3. Deploy the feature branch as a Preview. Verify the exact commit, all five routes, WhatsApp drafts, the call and email links, and the actual number with the owner. Keep preview protection as configured.
4. Record the current production deployment as the rollback target. After preview verification, merge to the confirmed production branch and verify the production deployment and custom-domain alias on Vercel.

For engagement, track real incoming WhatsApp conversations by intent, not just visits. A click opens a draft; it does not count as an enquiry until the visitor sends it.

All rights reserved.
