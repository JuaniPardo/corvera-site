export const SITE_CONFIG = {
  name: 'Dra. Patricia Corvera',
  contact: {
    phone: '+54 9 11 3887 7639',
    whatsapp: '5491138877639',
    email: 'contacto@dracorvera.com',
  },
  location: {
    address: 'Urquiza 963, Escobar',
    city: 'Buenos Aires',
    country: 'Argentina',
  },
  hours: {
    weekdays: 'Lunes a Viernes: 10:00 a 17:00',
    saturday: 'Sábados: 10:00 a 13:00',
  },
} as const;

export const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.contact.whatsapp}`;
