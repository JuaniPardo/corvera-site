'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { differencials } from '@/data/siteContent';

export default function DifferentialsSection() {
  return (
    <SectionBlock size="compact">
      <Box sx={{ display: 'grid', gap: 4.5 }}>
        <Reveal>
          <Box sx={{ display: 'grid', gap: 2, maxWidth: 780 }}>
            <Box component="h2" sx={typeStyles.h2}>
              Diferenciales de atención
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
              Criterio clínico, técnica precisa y seguimiento médico para sostener resultados armónicos en el tiempo.
            </Box>
          </Box>
        </Reveal>

        <Box sx={{ display: 'grid', borderTop: 1, borderColor: 'brand.beige' }}>
          {differencials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Box
                sx={{
                  py: { xs: 2.3, md: 2.8 },
                  borderBottom: 1,
                  borderColor: 'brand.beige',
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 280px) minmax(0, 1fr)' },
                  gap: { xs: 0.8, md: 2.5 },
                }}
              >
                <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.22rem' }}>
                  {String(index + 1).padStart(2, '0')} {item.title}
                </Box>
                <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray', maxWidth: 760 }}>
                  {item.description}
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </SectionBlock>
  );
}
