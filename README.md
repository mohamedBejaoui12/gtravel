# GTravel — Your Journey, Elevated

A responsive travel agency demonstration built with Next.js App Router, TypeScript, Tailwind CSS, shadcn-style Radix components, Lucide, Motion, React Hook Form and Zod.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Build a static deployment with `npm run build`; generated assets are in `out/`. Run `npm test` and `npm run typecheck` for checks.

## Explore the demo

Search Tunis → Paris (or any of the eight featured cities), change dates, passenger count and cabin, filter and sort flights, and complete the five-step reservation flow. Use fictional passenger data and a unique demo password. Sign in to see reservations, saved places and search history. Direct URLs exist for all main sections. Primary navigation and homepage search actions support English and French; detailed editorial and booking copy is English. Layout uses logical document direction at the root for future RTL localization.

All 32 flight options, prices, offers, contacts, testimonials, payments and confirmations are illustrative. No external airline, payment gateway, database or email system is connected. Account verifiers and reservations are stored in the browser, not a secure authentication backend. Newsletter and contact forms simulate success only. A one-way sample price is multiplied by cabin, passengers and round-trip legs; review adds 12% illustrative taxes and 25 DT per passenger. Return itineraries deliberately reuse the sample carrier, departure time and duration. Some routes have no sample availability and show an empty state.

## Structure

- `src/app/`: App Router entry points and responsive design system
- `src/components/travel-app.tsx`: connected demo experience and local state
- `src/components/ui/`: reusable Radix dialog and button primitives
- `src/lib/data.ts`: destination catalog, typed mock flights and pricing logic
- `public/logo.svg` / `public/logo-icon.svg`: original transparent vector wordmark and icon
- `public/images/`: locally hosted photography and travel footage

`matchFlights` and `fare` are pure functions that can be replaced by a real API adapter; UI persistence helpers can be replaced by an authenticated service. Production launch requires real authentication, secure backend validation, real fare availability, reviewed legal copy and real business information.

## Asset credits

Photographs are sourced from Unsplash (https://unsplash.com/license); source photo IDs are recorded in ASSETS.md. Travel footage is from Pexels (https://www.pexels.com/license/). Google Fonts: DM Sans and Playfair Display (SIL Open Font License). Icons: Lucide (ISC). The GTravel logo was created specifically for this project. No real endorsements or review scores are claimed.
