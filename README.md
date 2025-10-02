# MansuWallet Landing Page

A standalone landing page for MansuWallet built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, responsive design optimized for all devices
- **Waitlist Integration**: Functional waitlist signup with Google Apps Script backend
- **Smooth Animations**: Framer Motion powered reveal animations
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Optimized for Core Web Vitals

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Fonts**: Custom Gilroy font family
- **API**: Google Apps Script for waitlist management

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
mansuwallet-landing/
├── app/
│   ├── components/          # MansuWallet specific components
│   │   ├── WalletHero.tsx
│   │   ├── WalletFeatures.tsx
│   │   ├── WalletCTA.tsx
│   │   ├── WalletWaitlist.tsx
│   │   ├── ui/              # Reusable UI components
│   │   └── Icons/           # Icon components
│   ├── layouts/             # Layout components
│   │   ├── SimpleHeader.tsx
│   │   └── SimpleFooter.tsx
│   ├── api/                 # API routes
│   │   └── waitlist/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/
│   ├── assets/
│   │   ├── fonts/           # Custom fonts
│   │   └── images/          # Images and assets
│   └── logos/               # Logo files
└── ...config files
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

No environment variables are required for basic functionality. The waitlist API endpoint is configured in the component.

## Customization

### Colors
Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: "#C51F5F",
  secondary: "#E4E4E4",
  // ... other colors
}
```

### Fonts
Custom Gilroy fonts are included. To change fonts, update the font files in `public/assets/fonts/` and modify the CSS in `globals.css`.

### Content
Update the content in the component files:
- `WalletHero.tsx` - Hero section content
- `WalletFeatures.tsx` - Features and benefits
- `WalletCTA.tsx` - Call-to-action sections

## License

This project is proprietary and confidential.
