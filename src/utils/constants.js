// Application constants for Ribison Chemicals

export const COMPANY_INFO = {
  name: 'Ribison Chemicals',
  tagline: 'Premium Chemical Solutions',
  email: 'info@ribison.com',
  phone: '+91-123-456-7890',
  address: {
    street: '123 Industrial Area',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    pincode: '400001'
  },
  social: {
    facebook: 'https://www.facebook.com/ribisonchemicals',
    twitter: 'https://twitter.com/ribisonchemicals',
    linkedin: 'https://www.linkedin.com/company/ribison-chemicals',
    instagram: 'https://www.instagram.com/ribisonchemicals'
  }
};

export const PRODUCT_CATEGORIES = [
  { id: 'agriculture', name: 'Agriculture', icon: 'seedling' },
  { id: 'paints', name: 'Paints & Coatings', icon: 'palette' },
  { id: 'construction', name: 'Construction', icon: 'building' },
  { id: 'ceramic', name: 'Ceramic & Tiles', icon: 'cube' },
  { id: 'textile', name: 'Textile', icon: 'tshirt' },
  { id: 'specialty', name: 'Specialty Chemicals', icon: 'flask' }
];

export const FEATURED_PRODUCTS = [
  {
    id: 'ribi-gold',
    name: 'Ribi Gold',
    category: 'construction',
    description: 'Premium tile adhesive for superior bonding',
    image: '/images/Ribi gold.png',
    features: ['High Strength', 'Water Resistant', 'Fast Setting']
  },
  {
    id: 'ribi-silver',
    name: 'Ribi Silver',
    category: 'construction',
    description: 'Advanced construction chemical solution',
    image: '/images/ribi silver.png',
    features: ['Durable', 'Weather Resistant', 'Easy Application']
  },
  {
    id: 'ribibond',
    name: 'Ribibond',
    category: 'specialty',
    description: 'High-performance chemical binder',
    image: '/images/ribibond.jpg',
    features: ['Strong Adhesion', 'Chemical Resistant', 'Long Lasting']
  }
];

export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter'
};

export const ANIMATION_DURATIONS = {
  short: 300,
  medium: 500,
  long: 800
};