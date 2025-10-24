This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy to Vercel (this subfolder)

This app lives in a subfolder of a larger workspace. To deploy just this app:

1. Push your repository to GitHub/GitLab/Bitbucket.
2. In Vercel, click New Project → Import the repo.
3. When prompted for Root Directory, select `gradespark-dashboard`.
4. Framework Preset: Next.js (auto-detected).
5. Build & Output Settings: leave defaults
   - Build Command: `next build`
   - Install Command: `npm install`
   - Output Directory: `.next`
6. Environment variables: none required.
7. Deploy.

Notes:
- This app uses minimal cookie-based auth (no external services). Cookies are marked `secure` only in production and work locally.
- Middleware protects `/dashboard`; unauthenticated users are redirected to `/auth/login`.
