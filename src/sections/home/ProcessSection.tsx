'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { processSteps } from '@/data/siteContent';

export default function ProcessSection() {
  return (
    <SectionBlock>
      <Box sx={{ display: 'grid', gap: 5 }}>
        <Reveal>
          <Box sx={{ display: 'grid', gap: 2, maxWidth: 740 }}>
            <Box component="h2" sx={typeStyles.h2}>
              Proceso de atención
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
              Cuatro etapas claras para tomar decisiones con información y tranquilidad.
            </Box>
          </Box>
        </Reveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' },
            gap: 3,
          }}
        >
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <Box
                sx={(theme) => ({
                  display: 'grid',
                  gap: 1.5,
                  p: { xs: 3, md: 4 },
                  borderRadius: 1.5,
                  border: `1px solid ${theme.palette.brand.beige}`,
                  backgroundColor: theme.palette.background.paper,
                  height: '100%',
                })}
              >
                <Box
                  component="span"
                  sx={(theme) => ({
                    fontFamily: 'var(--font-heading), serif',
                    fontSize: '2.2rem',
                    lineHeight: 1,
                    color: theme.palette.brand.brown,
                  })}
                >
                  {String(index + 1).padStart(2, '0')}
                </Box>
                <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.4rem' }}>
                  {step.title}
                </Box>
                <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray' }}>
                  {step.description}
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </SectionBlock>
  );
}
