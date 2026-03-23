'use client';

import { typeStyles } from '@/theme/typeStyles';
import Link from 'next/link';
import { Box } from '@mui/system';
import FormField from '@/components/forms/FormField';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import PageHeading from '@/sections/shared/PageHeading';

export default function ContactoPage() {
  return (
    <>
      <PageHeading
        title="Contacto"
        description="WhatsApp, formulario, dirección y horarios para coordinar tu consulta de forma simple."
        compact
      />

      <SectionBlock size="compact">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(12, minmax(0, 1fr))' },
            gap: { xs: 4, lg: 5 },
            alignItems: 'start',
          }}
        >
          <Reveal>
            <Box
              sx={(theme) => ({
                gridColumn: { lg: 'span 5' },
                display: 'grid',
                gap: 2,
                p: { xs: 3, md: 4 },
                borderRadius: 1.5,
                border: `1px solid ${theme.palette.brand.beige}`,
                backgroundColor: theme.palette.background.paper,
              })}
            >
              <Box component="h2" sx={{ ...typeStyles.h2, fontSize: '2rem' }}>
                Vías de contacto
              </Box>
              <Box component={Link} href="https://wa.me/5491122334455" sx={(theme) => ({ color: theme.palette.brand.brown, fontWeight: 500 })}>
                WhatsApp: +54 9 11 2233 4455
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                Dirección: Av. Del Libertador 3450, CABA
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                Horarios: Lunes a Viernes de 10:00 a 19:00, Sábados de 10:00 a 13:00.
              </Box>
            </Box>
          </Reveal>

          <Reveal delay={0.06}>
            <Box
              component="form"
              sx={(theme) => ({
                gridColumn: { lg: 'span 7' },
                display: 'grid',
                gap: 2.25,
                p: { xs: 3, md: 4 },
                borderRadius: 1.5,
                border: `1px solid ${theme.palette.brand.beige}`,
                backgroundColor: theme.palette.background.paper,
              })}
            >
              <FormField label="Nombre" name="name" required />
              <FormField label="Email" name="email" type="email" required />
              <FormField label="Teléfono" name="phone" type="tel" />
              <FormField label="Mensaje" name="message" multiline required />

              <Box
                component="button"
                type="submit"
                sx={(theme) => ({
                  mt: 1,
                  minHeight: 48,
                  width: 'fit-content',
                  px: 3.5,
                  border: 'none',
                  borderRadius: 1.25,
                  backgroundColor: theme.palette.brand.brown,
                  color: theme.palette.primary.contrastText,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'background-color 320ms ease',
                  '&:hover': {
                    backgroundColor: theme.palette.brand.rose,
                  },
                })}
              >
                Enviar consulta
              </Box>
            </Box>
          </Reveal>
        </Box>
      </SectionBlock>
    </>
  );
}
