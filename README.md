
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
MIT License
