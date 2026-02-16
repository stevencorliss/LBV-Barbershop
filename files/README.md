# Barbershop Website Template

A modern, fast barbershop website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 🎬 **Framer Motion** for animations
- 📱 **Fully Responsive** design
- 📅 **Squire Integration** for online booking
- 📸 **Instagram Feed** integration
- 🗺️ **Google Maps** embed
- 🔍 **SEO Optimized**

## Project Structure

```
barbershop-site/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Homepage
│   ├── testimonials/
│   │   └── page.tsx        # Testimonials page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── About.tsx       # About the shop
│   │   ├── Hours.tsx       # Business hours
│   │   ├── Testimonials.tsx # Testimonials carousel
│   │   ├── Instagram.tsx   # Instagram feed embed
│   │   └── Contact.tsx     # Contact info section
│   └── ui/
│       ├── Button.tsx      # Reusable button component
│       ├── Card.tsx        # Card component
│       └── Container.tsx   # Layout container
├── lib/
│   ├── constants.ts        # Shop info, hours, social links
│   └── utils.ts            # Utility functions
├── public/
│   ├── images/             # Shop images, logo
│   └── fonts/              # Custom fonts (if self-hosted)
├── styles/
│   └── globals.css         # Global styles & Tailwind
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Configuration

### 1. Shop Information (`lib/constants.ts`)

Update with your client's info:
- Shop name, address, phone
- Business hours
- Social media links
- Squire booking URL

### 2. Squire Booking Integration

Replace the booking URL in `lib/constants.ts`:
```typescript
export const BOOKING_URL = "https://web.getsquire.com/brands/your-shop-name"
```

### 3. Instagram Feed

Option A: Use Squire's built-in Instagram widget
Option B: Use Elfsight or similar embed service
Option C: Instagram Basic Display API (requires approval)

### 4. Google Maps

Add your Google Maps embed URL in the Contact component or use @react-google-maps/api for more control.

## Deployment

### Vercel (Recommended - Free Tier)
```bash
npm i -g vercel
vercel
```

### Other Options
- Netlify
- AWS Amplify
- Self-hosted on your client's infrastructure

## Customization Checklist

- [ ] Update shop name and branding
- [ ] Add logo to `/public/images/`
- [ ] Configure business hours
- [ ] Set up Squire booking URL
- [ ] Add Google Maps embed
- [ ] Connect Instagram feed
- [ ] Update color scheme in `tailwind.config.ts`
- [ ] Add shop photos
- [ ] Collect and add testimonials
- [ ] Configure SEO metadata
- [ ] Set up domain and SSL

## License

MIT - Use freely for client projects.
