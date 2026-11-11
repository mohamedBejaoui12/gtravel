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

## Agency homepage & travel inquiries

The homepage introduces GTravel as a travel planning agency, with a prominent **Voyage à la carte** action and organized Omra, honeymoon and couples’ journeys. The interactive orthographic globe can be rotated by dragging or using arrow controls. The equivalent country list is keyboard accessible and remains usable if the map fails to load.

The custom flow covers 10 countries, 20 regions and 40 fictional hotel preferences. Country changes clear the region and hotel; region changes clear the hotel. Travelers submit validated dates and contact details to a browser-local demo request. Requests are stored under `gt-inquiries`; users signing in with the same email see them on their dashboard. No agency email, inbox, callback workflow or backend is connected. The success message is explicitly labeled as a demonstration. Use fictional contact details.

The organized journeys catalog includes three Omra programs, a Maldives honeymoon and couples’ stays in Marrakech and Istanbul. Each lists illustrative hotels, dates, duration, per-person DT prices and inclusions. Dates and hotel preferences carry into the inquiry flow. No payment or real booking takes place.

- `src/components/agency-home.tsx`: agency-led homepage and organized package catalog
- `src/components/journey-planner.tsx`: country → region → hotel → inquiry → confirmation flow
- `src/components/destination-globe.tsx`: local world geometry rendered using D3 orthographic projection
- `src/lib/journeys.ts`: typed sample catalog, inquiry validation and selection logic
- `public/world.json`: simplified Natural Earth country boundaries (public domain)
