# ForexAI Bots SaaS (Next.js + MongoDB + Stripe)

A production-oriented starter for selling AI-powered forex trading bots.

## Tech Stack
- Next.js App Router + React + TypeScript
- Tailwind CSS (dark SaaS UI)
- MongoDB + Mongoose
- NextAuth (Credentials + JWT session)
- Stripe Checkout + Webhook purchase persistence
- Recharts (dashboard analytics)

## Folder Structure
```bash
src/
  app/
    (auth)/login
    (auth)/signup
    (main)/products
    (main)/terms
    (main)/privacy
    (main)/risk-disclaimer
    dashboard
    admin
    payment/success
    payment/cancel
    api/
      auth/[...nextauth]
      auth/signup
      stripe/checkout
      stripe/webhook
      newsletter
      admin/bots
      admin/users
      admin/sales
  components/
    navbar.tsx
    footer.tsx
    checkout-button.tsx
    performance-chart.tsx
    newsletter-form.tsx
    live-chat-placeholder.tsx
  lib/
    db.ts
    stripe.ts
    auth-options.ts
    seed.ts
    static-data.ts
  models/
    User.ts
    Bot.ts
    Purchase.ts
    Newsletter.ts
middleware.ts
public/downloads/
```

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment:
   ```bash
   cp .env.example .env.local
   ```
3. Add real values in `.env.local`:
   - MongoDB connection string
   - `NEXTAUTH_SECRET`
   - Stripe keys
4. Run development server:
   ```bash
   npm run dev
   ```

## Stripe Webhook (local)
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```
Copy the generated webhook secret into `STRIPE_WEBHOOK_SECRET`.

## Admin Access
Create one user account, then set that user role to `admin` in MongoDB.

## Included Features
- High-converting homepage with hero CTA, features, testimonials, and performance stats
- Product pricing cards + comparison table
- Protected dashboard with purchased bots + chart analytics
- Stripe checkout with success/cancel pages and webhook purchase persistence
- Admin panel + admin APIs for bots/users/sales
- Legal pages: terms, privacy, risk disclaimer
- Newsletter capture API
- Live chat widget placeholder
- SEO metadata in layout and product page
- Loading skeleton (`src/app/loading.tsx`)
- Dummy forex performance data + mock bot download files

## Production Notes
- Move from Credentials auth to OAuth if needed
- Add rate limiting + API input validation
- Add server-side audit logging for financial/legal controls
- Replace mock bot files with actual encrypted bot artifacts
