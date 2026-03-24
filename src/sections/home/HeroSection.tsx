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
              Dermatología y medicina estética con diagnóstico médico y resultados naturales.
            </Box>

            <Box
              component="p"
              sx={(theme) => ({
                ...(typeStyles.body1),
                color: theme.palette.brand.gray,
                maxWidth: 575,
              })}
            >
              Tratamientos personalizados, técnica conservadora y seguimiento clínico para mejorar la piel sin perder identidad.
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <ActionLink href="/contacto" label="Solicitar consulta" variant="primary" />
              <ActionLink href="/sobre" label="Conocer enfoque médico" variant="secondary" />
            </Box>
          </Box>
        </Reveal>

        <Reveal delay={0.08}>
          <Box sx={{ gridColumn: { lg: 'span 6' } }}>
            <Box
              component="img"
              src="/patricia-portrait.svg"
              alt="Retrato ilustrado de la Dra. Patricia Corvera"
              sx={(theme) => ({
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                border: `1px solid ${theme.palette.brand.beige}`,
                backgroundColor: theme.palette.background.paper,
                boxShadow: '0 18px 34px rgba(115, 78, 64, 0.08)',
              })}
            />
          </Box>
        </Reveal>
      </Box>
    </SectionBlock>
  );
}
