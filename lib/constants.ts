// ============================================
// SHOP CONFIGURATION
// Update these values for your client's shop
// ============================================

export const SHOP_INFO = {
  name: "La Buona Vita Barbershop",
  tagline: "More Than A Cut - It's La Vita",
  description:
    "Experience top-tier men's grooming with precision haircuts, expert beard trims, and classic hot towel shaves.",
  address: {
    street: "1187 Main Street",
    city: "Wakefield",
    state: "MA",
    zip: "01880",
  },
  phone: "(781) 417-8612",
  email: "info@labuonavitabarbershop.com",
} as const;

export const SQUIRE_BRAND_ID = "2eca291d-c7cb-4ebb-a05d-bacc2d939908";
export const BOOKING_URL = `https://book.getsquire.com/book/${SQUIRE_BRAND_ID}`;

export const BUSINESS_HOURS = [
  { day: "Monday", hours: "CLOSED", isOpen: false },
  { day: "Tuesday", hours: "9am - 6pm", isOpen: true },
  { day: "Wednesday", hours: "9am - 6pm", isOpen: true },
  { day: "Thursday", hours: "9am - 6pm", isOpen: true },
  { day: "Friday", hours: "9am - 6pm", isOpen: true },
  { day: "Saturday", hours: "8am - 2pm", isOpen: true },
  { day: "Sunday", hours: "CLOSED", isOpen: false },
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/LaBuonaVitaBarbershop",
  facebook: "https://www.facebook.com/yourshop",
  yelp: "https://www.yelp.com/biz/your-shop",
} as const;

// Instagram handle for feed embed (without @)
export const INSTAGRAM_HANDLE = "LaBuonaVitaBarbershop";

// Google Maps embed URL - get this from Google Maps > Share > Embed
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23541.69467860662!2d-71.0830024652344!3d42.47641710000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3730ffd535de7%3A0x11a77ae93d7779fd!2s1187%20Main%20St%2C%20Wakefield%2C%20MA%2001880!5e0!3m2!1sen!2sus!4v1771385080370!5m2!1sen!2sus";

// Latitude/Longitude for any map integrations
export const SHOP_COORDINATES = {
  lat: 42.4584,
  lng: -71.0598,
} as const;

// ============================================
// TESTIMONIALS
// ============================================

export const TESTIMONIALS = [
  {
    id: 1,
    text: "Best barbershop in the area. The barbers are skilled, professional, and always give a great cut. Highly recommend!",
    author: "John D.",
    source: "Google",
  },
  {
    id: 2,
    text: "I've been coming here for years. Great atmosphere, friendly staff, and consistently excellent haircuts.",
    author: "Mike S.",
    source: "Yelp",
  },
  {
    id: 3,
    text: "Found my new go-to spot. The attention to detail is incredible and the hot towel shave is a must-try.",
    author: "Chris R.",
    source: "Google",
  },
  {
    id: 4,
    text: "Professional, clean, and the guys know what they're doing. My son and I both get our cuts here now.",
    author: "David M.",
    source: "Google",
  },
] as const;

// ============================================
// SERVICES (optional - if you want a services section)
// ============================================

export const SERVICES = [
  {
    name: "Haircut",
    price: "$30+",
    description: "Precision cut with hot towel finish",
  },
  {
    name: "Beard Trim",
    price: "$15+",
    description: "Shape and detail your beard",
  },
  {
    name: "Hot Towel Shave",
    price: "$35+",
    description: "Classic straight razor shave",
  },
  {
    name: "Haircut & Beard",
    price: "$40+",
    description: "Full service combination",
  },
] as const;

// ============================================
// SEO / METADATA
// ============================================

export const SEO = {
  title: `${SHOP_INFO.name} | ${SHOP_INFO.address.city}, ${SHOP_INFO.address.state}`,
  description: SHOP_INFO.description,
  keywords: [
    "barbershop",
    "haircut",
    "beard trim",
    "hot towel shave",
    "mens grooming",
    SHOP_INFO.address.city,
    SHOP_INFO.address.state,
  ],
} as const;
