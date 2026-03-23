'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import PageHeading from '@/sections/shared/PageHeading';

export default function SobrePage() {
  return (
    <>
      <PageHeading
        title="Sobre la Dra. Patricia Corvera"
        description="Una práctica centrada en criterio médico, escucha activa y resultados naturales a largo plazo."
        compact
      />

      <SectionBlock size="compact">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(12, minmax(0, 1fr))' },
            gap: { xs: 4, lg: 6 },
            alignItems: 'center',
          }}
        >
          <Reveal>
            <Box sx={{ gridColumn: { lg: 'span 5' } }}>
              <Box
                component="img"
                src="/patricia-portrait.svg"
                alt="Retrato de la Dra. Patricia Corvera"
                sx={(theme) => ({
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.brand.beige}`,
                })}
              />
            </Box>
          </Reveal>

          <Reveal delay={0.06}>
            <Box sx={{ gridColumn: { lg: 'span 7' }, display: 'grid', gap: 2.5 }}>
              <Box component="h2" sx={typeStyles.h2}>
                Historia y filosofía de trabajo
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                La práctica combina experiencia clínica y medicina estética con una mirada responsable: indicar solo lo que aporta valor real en cada caso.
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                La consulta se basa en diagnóstico individual, comunicación clara y definición conjunta de objetivos posibles.
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                El seguimiento posterior es parte central del proceso, para sostener resultados y cuidar la salud de la piel en el tiempo.
              </Box>
            </Box>
          </Reveal>
        </Box>
      </SectionBlock>
    </>
  );
}
