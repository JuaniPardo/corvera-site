'use client';

import { typeStyles } from '@/theme/typeStyles';
import Link from 'next/link';
import { Box } from '@mui/system';

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
            Dra. Patricia Corvera
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
            href="https://wa.me/5491122334455"
            sx={{ ...typeStyles.body2, color: 'brand.gray', fontSize: { xs: '1rem', md: '0.98rem' } }}
          >
            WhatsApp: +54 9 11 2233 4455
          </Box>
          <Box component="span" sx={{ ...typeStyles.body2, color: 'brand.gray', fontSize: { xs: '1rem', md: '0.98rem' } }}>
            contacto@dracorvera.com
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gap: 1.1 }}>
          <Box component="strong" sx={{ color: 'brand.text', fontSize: { xs: '0.98rem', md: '0.95rem' } }}>
            Dirección
          </Box>
          <Box component="span" sx={{ ...typeStyles.body2, color: 'brand.gray', fontSize: { xs: '1rem', md: '0.98rem' } }}>
            Av. Del Libertador 3450, CABA
          </Box>
          <Box component="span" sx={{ ...typeStyles.body2, color: 'brand.gray', fontSize: { xs: '1rem', md: '0.98rem' } }}>
            Consultorio privado
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gap: 1.1 }}>
          <Box component="strong" sx={{ color: 'brand.text', fontSize: { xs: '0.98rem', md: '0.95rem' } }}>
            Horarios
          </Box>
          <Box component="span" sx={{ ...typeStyles.body2, color: 'brand.gray', fontSize: { xs: '1rem', md: '0.98rem' } }}>
            Lunes a Viernes: 10:00 a 19:00
          </Box>
          <Box component="span" sx={{ ...typeStyles.body2, color: 'brand.gray', fontSize: { xs: '1rem', md: '0.98rem' } }}>
            Sábados: 10:00 a 13:00
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
