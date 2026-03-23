'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import InfoCard from '@/components/ui/InfoCard';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { highlightedTreatments } from '@/data/siteContent';

function CardVisual({ index }: { index: number }) {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: 1.25,
        border: `1px solid ${theme.palette.brand.beige}`,
        backgroundColor: index % 2 === 0 ? theme.palette.brand.nude : theme.palette.brand.background,
        height: 132,
        px: 2.5,
        py: 2,
        display: 'grid',
        alignContent: 'space-between',
      })}
    >
      <Box sx={(theme) => ({ width: 42, height: 42, borderRadius: 1, backgroundColor: theme.palette.background.paper })} />
      <Box sx={{ display: 'grid', gap: 1 }}>
        <Box sx={(theme) => ({ width: '56%', height: 8, borderRadius: 999, backgroundColor: theme.palette.brand.beige })} />
        <Box sx={(theme) => ({ width: '80%', height: 8, borderRadius: 999, backgroundColor: theme.palette.brand.beige })} />
      </Box>
    </Box>
  );
}

export default function TreatmentsSection() {
  return (
    <SectionBlock>
      <Box sx={{ display: 'grid', gap: 5 }}>
        <Reveal>
          <Box sx={{ display: 'grid', gap: 2, maxWidth: 760 }}>
            <Box component="h2" sx={typeStyles.h2}>
              Tratamientos destacados
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
              Protocolos adaptados a cada paciente para priorizar seguridad, naturalidad y calidad de piel.
            </Box>
          </Box>
        </Reveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
            gap: 3,
          }}
        >
          {highlightedTreatments.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <InfoCard title={item.title} description={item.description}>
                <CardVisual index={index} />
              </InfoCard>
            </Reveal>
          ))}
        </Box>
      </Box>
    </SectionBlock>
  );
}
