# Refresh! Renew! — General Contracting & Renovation Website

## Current State
New project — no existing pages or backend.

## Requested Changes (Diff)

### Add
- Full multi-page website for Refresh! Renew!, a Hamilton, Ontario general contracting business
- 8 pages: Home, Services, About, Portfolio, Our Process, Testimonials, FAQ, Contact
- Contact/quote request form stored in backend (name, phone, email, project type, budget range, preferred start date, message)
- Persistent navigation with "Get a Free Quote" CTA on every page
- Footer with business name, phone, service area, licensed & insured, tagline on every page

### Modify
N/A

### Remove
N/A

## Implementation Plan

### Backend
- `submitQuoteRequest(name, phone, email, projectType, budgetRange, startDate, message)` -> returns ok/err
- `getQuoteRequests()` -> admin read of all submissions

### Frontend Pages
1. **Home** — Hero with headline + 2 CTAs, trust bar (5 icons), intro paragraph, featured services preview, 3 testimonials
2. **Services** — 12 service cards with descriptions emphasizing transformation, Ontario Building Code note
3. **About** — Personal company story, team info, credentials, values
4. **Portfolio** — Filterable image gallery by category (Kitchen, Bathroom, Basement, Additions, Decks, Full Home), captions per photo
5. **Our Process** — 7-step process with icons, descriptions, Ontario permit note
6. **Testimonials** — 6–8 detailed reviews with name, project type, quote
7. **FAQ** — Accordion with 8+ questions covering licensing, permits, payment, timeline
8. **Contact** — Quote form (all fields), click-to-call, business hours, service area, free consultation note

### Design Tokens
- Primary: deep charcoal (#1C1C1E / slate-900)
- Background: crisp white
- Accent: warm gold/burnt orange (#D4860B or similar)
- Typography: bold, confident headlines; clean body text
- Layout: image-heavy, mobile-first, clean grid

### SEO
- Page titles and meta descriptions targeting Hamilton-specific search terms
- Structured local business copy throughout
