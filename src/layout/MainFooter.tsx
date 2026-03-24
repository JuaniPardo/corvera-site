'use client';

import { typeStyles } from '@/theme/typeStyles';
import Link from 'next/link';
import { Box } from '@mui/system';
import { SITE_CONFIG, WHATSAPP_LINK } from '@/config/site';

export default function MainFooter() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        borderTop: `1px solid ${theme.palette.brand.beige}`,
        backgroundColor: theme.palette.background.paper,
      })}
    >
      <Box
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: 1200,
          px: { xs: 3, sm: 4, md: 6 },
          py: { xs: 8, md: 9 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: '1.2fr 1fr 1fr 1fr' },
          gap: 4,
        }}
      >
        <Box sx={{ display: 'grid', gap: 1.5 }}>
          <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.35rem' }}>
            {SITE_CONFIG.name}
          </Box>
          <Box component="p" sx={{ ...typeStyles.body2, maxWidth: 320 }}>
            Medicina estética con criterio médico, resultados naturales y seguimiento personalizado.
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gap: 1.1 }}>
          <Box component="strong" sx={{ color: 'brand.text', fontSize: { xs: '0.98rem', md: '0.95rem' } }}>
            Contacto
          </Box>
          <Box
            component={Link}
            href={WHATSAPP_LINK}
            sx={{ ...typeStyles.body2, color: 'brand.gray', fontSize: { xs: '1rem', md: '0.98rem' } }}
          >
            WhatsApp: {SITE_CONFIG.contact.phone}
          </Box>
          <Box component="span" sx={{ ...typeStyles.body2, color: 'brand.gray', fontSize: { xs: '1rem', md: '0.98rem' } }}>
            {SITE_CONFIG.contact.email}
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gap: 1.1 }}>
          <Box component="strong" sx={{ color: 'brand.text', fontSize: { xs: '0.98rem', md: '0.95rem' } }}>
            Dirección
          </Box>
          <Box component="span" sx={{ ...typeStyles.body2, color: 'brand.gray', fontSize: { xs: '1rem', md: '0.98rem' } }}>
            {SITE_CONFIG.location.address}
          </Box>
          <Box component="span" sx={{ ...typeStyles.body2, color: 'brand.gray', fontSize: { xs: '1rem', md: '0.98rem' } }}>
            {SITE_CONFIG.location.city}, {SITE_CONFIG.location.country}
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gap: 1.1 }}>
          <Box component="strong" sx={{ color: 'brand.text', fontSize: { xs: '0.98rem', md: '0.95rem' } }}>
            Horarios
          </Box>
          <Box component="span" sx={{ ...typeStyles.body2, color: 'brand.gray', fontSize: { xs: '1rem', md: '0.98rem' } }}>
            {SITE_CONFIG.hours.weekdays}
          </Box>
          <Box component="span" sx={{ ...typeStyles.body2, color: 'brand.gray', fontSize: { xs: '1rem', md: '0.98rem' } }}>
            {SITE_CONFIG.hours.saturday}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
