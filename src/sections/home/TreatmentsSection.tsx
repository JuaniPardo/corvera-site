'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import ActionLink from '@/components/ui/ActionLink';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { highlightedTreatments } from '@/data/siteContent';

export default function TreatmentsSection() {
  return (
    <SectionBlock size="compact">
      <Box sx={{ display: 'grid', gap: 4.5 }}>
        <Reveal>
          <Box sx={{ display: 'grid', gap: 2, maxWidth: 780 }}>
            <Box component="h2" sx={typeStyles.h2}>
              Tratamientos destacados
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
              Selección de abordajes de alta demanda clínica y estética, definidos según diagnóstico y objetivos reales.
            </Box>
          </Box>
        </Reveal>

        <Box sx={{ display: 'grid', borderTop: 1, borderColor: 'brand.beige' }}>
          {highlightedTreatments.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Box
                sx={{
                  py: { xs: 2.4, md: 2.9 },
                  borderBottom: 1,
                  borderColor: 'brand.beige',
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 300px) minmax(0, 1fr)' },
                  gap: { xs: 0.85, md: 2.5 },
                }}
              >
                <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.3rem' }}>
                  {item.title}
                </Box>
                <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray', maxWidth: 760 }}>
                  {item.description}
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>

        <Reveal delay={0.1}>
          <Box sx={{ pt: 0.75 }}>
            <ActionLink href="/tratamientos" label="Ver todos los tratamientos" variant="secondary" />
          </Box>
        </Reveal>
      </Box>
    </SectionBlock>
  );
}
