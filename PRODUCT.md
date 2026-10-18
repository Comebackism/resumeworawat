# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers in Thailand screening for internship or junior developer roles. They usually arrive from a CV, LinkedIn, or a shared link, often on a phone, and need to judge fit within the first minute. A secondary audience is a potential freelance client evaluating whether Worawat can build and ship a real web product.

## Product Purpose

A personal resume and portfolio for Worawat Boonrueng, an IT student at Prince of Songkla University. It exists to turn a quick scan into a conversation: the visitor should understand who he is, see evidence that he can build real software, and contact him for an interview or a project. Success is a recruiter sending an email, opening LinkedIn, or visiting a live project demo.

## Positioning

A student developer whose work is already running in production, not only coursework: a full POS system used by a real waffle shop, with customer QR ordering, cashier, kitchen display, inventory, and a sales dashboard. The site should let the work prove the claim instead of listing technologies as a promise.

## Operating Context

Visitors read in Thai, often in short mobile sessions between other screening tasks. They may also open the site on a desktop during an interview or while reviewing a shortlist. Live demos are part of the evaluation: the Tee Ob POS demo is a working login, and the resume should surface its test credentials clearly. The site is statically deployed on Vercel.

## Capabilities and Constraints

- Existing Next.js 16 + TypeScript + Tailwind CSS v4 codebase with Framer Motion; static output.
- Content, projects, education, and links come from `src/lib/data.ts`; all Thai copy and the current project set (Tee Ob Waffle POS System, Mjaytea Landing Page, Worawat Computer E-Commerce) must be preserved.
- The blue palette (PSU-inspired navy and cyan) is a confirmed brand commitment.
- Mobile must be excellent; the current light/dark toggle is not a hard requirement.
- Real, working URLs: GitHub, LinkedIn, email, and the three project demos. No invented employers, clients, testimonials, or metrics.

## Brand Commitments

- Thai-first voice: polite, direct, and personal.
- Navy/cyan blue identity with a simple "W" monogram.
- No corporate stock language or fabricated claims.

## Evidence on Hand

- `public/worawat.jpg` — portrait photo.
- `src/lib/data.ts` — verified bio, contact links, education (PSU, GPA 3.45), skills, and project descriptions.
- Tee Ob Waffle POS System — live demo at `https://project-waffle-tee-ob.vercel.app/login` with working test accounts `mzaba01 / 1234` (cashier) and `nipat / 1234` (kitchen); GitHub repository exists.
- Mjaytea and Worawat Computer have live demos and repositories.
- Absences to preserve: no work-history employers, no client testimonials, no user counts, no certifications beyond those listed.

## Product Principles

1. Let running software carry the argument; screenshots and demos outrank adjectives.
2. Thai reading comfort is a design constraint, not a translation step.
3. Every screenful must answer "who is this, what can they do, and how do I reach them".
4. Keep the path to contact obvious without crowding the work.
5. Ship a fast, accessible, genuinely mobile-first page.

## Accessibility & Inclusion

Thai-first typography with readable line length and contrast; keyboard-visible focus; `prefers-reduced-motion` respected; touch targets at least 44px; body copy at least 16px and document labels no smaller than 10px.
