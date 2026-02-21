# No Effort — Marketing Website

**noeffort.life** — Minder wrijving. Meer intentie.

## Brand

- **Brand**: No Effort (domain: noeffort.life)
- **Product**: NEW Lifestyle (No Effort Wealth)
- **Tagline**: "No effort ≠ no discipline. It's no friction."
- **Primary language**: Dutch

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) (blog posts)
- [gray-matter](https://github.com/jonschlinkert/gray-matter) (frontmatter parsing)

## Site Map

| Route | Description |
|-------|-------------|
| `/` | No Effort brand landing |
| `/wealth-lifestyle` | NEW Lifestyle homepage |
| `/wealth-lifestyle/product` | Product detail page |
| `/wealth-lifestyle/pricing` | Pricing page |
| `/about` | About page |
| `/learn` | Blog index |
| `/learn/[slug]` | Blog post (MDX) |
| `/security` | Security page |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/waitlist/success` | Waitlist success page |
| `/api/waitlist` | POST – waitlist signup |
| `/product` | → redirect to `/wealth-lifestyle/product` |
| `/pricing` | → redirect to `/wealth-lifestyle/pricing` |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Content

Blog posts live in `content/learn/*.mdx` with frontmatter:

```mdx
---
title: "Post title"
description: "Short description"
date: "2024-01-01"
---

Post content here...
```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add environment variables here as needed
# Example for future database integration:
# DATABASE_URL=
# NEXT_PUBLIC_SITE_URL=https://noeffort.life
```

## AWS Amplify Deployment

1. Connect your GitHub repository to AWS Amplify.
2. Set the **build settings** (or use `amplify.yml`):

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

3. Add environment variables in the Amplify Console under **Environment variables**.
4. Deploy — Amplify will automatically build and deploy on every push to your configured branch.

> **Note**: The `/api/waitlist` route currently logs signups to the console. Connect a database (e.g., DynamoDB, Supabase) via environment variables before going to production.
