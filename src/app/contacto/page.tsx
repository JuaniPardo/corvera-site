'use client';

import { typeStyles } from '@/theme/typeStyles';
import Link from 'next/link';
import { Box } from '@mui/system';
import { alpha } from '@mui/material/styles';
import FormField from '@/components/forms/FormField';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import PageHeading from '@/sections/shared/PageHeading';
import { SITE_CONFIG, WHATSAPP_LINK } from '@/config/site';

export default function ContactoPage() {
  return (
    <>
      <PageHeading
        title="Contacto"
        description="WhatsApp, formulario, dirección y horarios para coordinar tu consulta de forma simple."
        compact
      />

      <SectionBlock size="compact" background="brand.petroleum">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(12, minmax(0, 1fr))' },
            gap: { xs: 3.2, lg: 4.2 },
            alignItems: 'start',
          }}
        >
          <Reveal>
            <Box
              component="form"
              sx={(theme) => ({
                gridColumn: { lg: 'span 8' },
                display: 'grid',
                gap: 2.35,
                p: { xs: 3.2, md: 4.4 },
                borderRadius: 1.5,
                border: `1px solid ${theme.palette.brand.beige}`,
                backgroundColor: theme.palette.background.paper,
                boxShadow: `0 22px 40px ${alpha(theme.palette.brand.petroleum, 0.2)}`,
              })}
            >
              <Box sx={{ display: 'grid', gap: 0.5 }}>
                <Box component="h2" sx={{ ...typeStyles.h2, fontSize: '1.95rem' }}>
                  Solicitar consulta
                </Box>
                <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray', maxWidth: 620 }}>
                  Completá tus datos y te contactamos para coordinar día y horario según tu disponibilidad.
                </Box>
              </Box>

              <FormField label="Nombre" name="name" required />
              <FormField label="Email" name="email" type="email" required />
              <FormField label="Teléfono" name="phone" type="tel" />
              <FormField label="Mensaje" name="message" multiline required />

              <Box
                component="button"
                type="submit"
                sx={(theme) => ({
                  mt: 1,
                  minHeight: 52,
                  width: { xs: '100%', sm: 'fit-content' },
                  px: 3.5,
                  border: 'none',
                  borderRadius: 1.25,
                  backgroundColor: theme.palette.brand.petroleum,
                  color: theme.palette.primary.contrastText,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'background-color 320ms ease',
                  '&:hover': {
                    backgroundColor: theme.palette.brand.brown,
                  },
                })}
              >
                Enviar consulta
              </Box>
            </Box>
          </Reveal>

          <Reveal delay={0.05}>
            <Box
              sx={(theme) => ({
                gridColumn: { lg: 'span 4' },
                display: 'grid',
                gap: 2.1,
                p: { xs: 3, md: 3.6 },
                borderRadius: 1.5,
                border: `1px solid ${theme.palette.brand.beige}`,
                backgroundColor: theme.palette.background.default,
                minHeight: { lg: 520 },
              })}
            >
              <Box component="h2" sx={{ ...typeStyles.h2, fontSize: '1.75rem' }}>
                Vías de contacto
              </Box>
              <Box
                component={Link}
                href={WHATSAPP_LINK}
                sx={(theme) => ({ color: theme.palette.brand.brown, fontWeight: 500, textDecoration: 'none' })}
              >
                WhatsApp: {SITE_CONFIG.contact.phone}
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                Email: {SITE_CONFIG.contact.email}
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                Dirección: {SITE_CONFIG.location.address}, {SITE_CONFIG.location.city}, {SITE_CONFIG.location.country}
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                Horarios: {SITE_CONFIG.hours.weekdays}. {SITE_CONFIG.hours.saturday}.
              </Box>
            </Box>
          </Reveal>
        </Box>
      </SectionBlock>
    </>
  );
}
