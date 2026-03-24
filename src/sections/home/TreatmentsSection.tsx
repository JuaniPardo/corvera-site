'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import { alpha } from '@mui/material/styles';
import ActionLink from '@/components/ui/ActionLink';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { highlightedTreatments } from '@/data/siteContent';

export default function TreatmentsSection() {
  return (
    <SectionBlock size="compact" background="brand.petroleum">
      <Box sx={{ display: 'grid', gap: 4.5 }}>
        <Reveal>
          <Box sx={{ display: 'grid', gap: 2, maxWidth: 780 }}>
            <Box component="h2" sx={{ ...typeStyles.h2, color: 'background.paper' }}>
              Tratamientos destacados
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'background.paper', opacity: 0.86, maxWidth: 700 }}>
              Opciones elegidas por su efectividad clínica y resultados visibles sin perder naturalidad.
            </Box>
          </Box>
        </Reveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            gap: 2.25,
          }}
        >
          {highlightedTreatments.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Box
                sx={(theme) => ({
                  display: 'grid',
                  gap: 1.2,
                  p: { xs: 2.6, md: 2.9 },
                  borderRadius: 1.5,
                  border: 1,
                  borderColor: 'brand.beige',
                  backgroundColor: 'background.paper',
                  minHeight: 210,
                  transition: 'transform 220ms ease, box-shadow 240ms ease',
                  '@media (hover: hover)': {
                    '&:hover': {
                      transform: 'scale(1.012)',
                      boxShadow: `0 18px 32px ${alpha(theme.palette.brand.petroleum, 0.15)}`,
                    },
                  },
                })}
              >
                <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                  {item.category}
                </Box>
                <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.2rem' }}>
                  {item.title}
                </Box>
                <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray', maxWidth: 320 }}>
                  {item.description}
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>

        <Reveal delay={0.1}>
          <Box
            sx={{
              pt: 0.75,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.35,
              p: { xs: 1.2, md: 1.35 },
              borderRadius: 1.5,
              border: 1,
              borderColor: 'brand.beige',
              backgroundColor: 'background.paper',
              width: 'fit-content',
            }}
          >
            <ActionLink href="/contacto" label="Quiero una consulta médica" variant="primary" />
            <ActionLink href="/tratamientos" label="Explorar todos los tratamientos" variant="secondary" />
          </Box>
        </Reveal>
      </Box>
    </SectionBlock>
  );
}
