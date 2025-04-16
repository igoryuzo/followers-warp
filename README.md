# Farcaster Mini App

A simple Farcaster Mini App built with Next.js and TypeScript.

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Run the development server:
   ```bash
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view your app

## Customize

- Replace the placeholder images in the `public` directory:
  - `splash.png`: Splash screen image (recommended size: 200x200px)
  - `icon.png`: App icon
  - `warp-celeb.gif`: Image for sharing in feeds (3:2 aspect ratio)

- Update the domain URLs in `src/app/layout.tsx` and `public/.well-known/farcaster.json` to your actual domain

## Publishing

1. Verify your Farcaster account ownership by adding the `accountAssociation` property to your `farcaster.json` file using the [Mini App Manifest Tool](https://warpcast.com/~/developers/new)
2. Deploy your app to a hosting provider (Vercel, Netlify, etc.)
3. Ensure your domain serves the `/.well-known/farcaster.json` file correctly

## Documentation

For more details on Farcaster Mini Apps, see the [official documentation](https://docs.farcaster.xyz/mini-apps/overview).
