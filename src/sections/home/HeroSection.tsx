'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import ActionLink from '@/components/ui/ActionLink';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';

export default function HeroSection() {
  return (
    <SectionBlock size="compact">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(12, minmax(0, 1fr))' },
          alignItems: 'center',
          gap: { xs: 5.5, lg: 7 },
        }}
      >
        <Reveal>
          <Box sx={{ gridColumn: { lg: 'span 6' }, display: 'grid', gap: 3.25 }}>
            <Box component="h1" sx={{ ...typeStyles.h1, maxWidth: 640 }}>
              Resultados naturales para tu piel, con criterio médico en cada decisión.
            </Box>

            <Box
              component="p"
              sx={(theme) => ({
                ...(typeStyles.body1),
                color: theme.palette.brand.gray,
                maxWidth: 590,
              })}
            >
              Consulta médica personalizada para tratar, prevenir y mejorar la piel con seguridad clínica y un plan realista.
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['Diagnóstico médico', 'Técnica conservadora', 'Seguimiento clínico'].map((item) => (
                <Box
                  component="span"
                  key={item}
                  sx={{
                    px: 1.4,
                    py: 0.7,
                    borderRadius: 1,
                    border: 1,
                    borderColor: 'brand.beige',
                    backgroundColor: 'background.paper',
                    fontSize: '0.82rem',
                    color: 'brand.brown',
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <ActionLink href="/contacto" label="Reservar consulta de evaluación" variant="primary" />
              <ActionLink href="/tratamientos" label="Ver tratamientos" variant="secondary" />
            </Box>
          </Box>
        </Reveal>

        <Reveal delay={0.08}>
          <Box sx={{ gridColumn: { lg: 'span 6' }, position: 'relative' }}>
            <Box
              component="img"
              src="/paty01.webp"
              alt="Retrato de la Dra. Patricia Corvera"
              sx={(theme) => ({
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                border: `1px solid ${theme.palette.brand.beige}`,
                backgroundColor: theme.palette.background.paper,
                boxShadow: '0 18px 34px rgba(115, 78, 64, 0.08)',
              })}
            />
            <Box
              sx={{
                position: { xs: 'static', md: 'absolute' },
                left: { md: 18 },
                bottom: { md: 18 },
                mt: { xs: 2, md: 0 },
                p: { xs: 2.4, md: 2.8 },
                maxWidth: 310,
                borderRadius: 1.5,
                border: 1,
                borderColor: 'brand.beige',
                backgroundColor: 'background.paper',
                display: 'grid',
                gap: 0.7,
              }}
            >
              <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                Primera consulta
              </Box>
              <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.text' }}>
                Evaluación clínica, objetivos realistas y plan de tratamiento personalizado.
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Box>
    </SectionBlock>
  );
}
