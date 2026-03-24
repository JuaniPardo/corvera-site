'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { processSteps } from '@/data/siteContent';

export default function ProcessSection() {
  return (
    <SectionBlock size="compact">
      <Box sx={{ display: 'grid', gap: 4.5 }}>
        <Reveal>
          <Box sx={{ display: 'grid', gap: 2, maxWidth: 740 }}>
            <Box component="h2" sx={typeStyles.h2}>
              Proceso de atención
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
              Cuatro etapas claras para tomar decisiones con información, seguridad y acompañamiento médico.
            </Box>
          </Box>
        </Reveal>

        <Box sx={{ display: 'grid', borderTop: 1, borderColor: 'brand.beige' }}>
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 180px) minmax(0, 1fr)' },
                  gap: { xs: 0.65, md: 2.5 },
                  py: { xs: 2.3, md: 2.8 },
                  borderBottom: 1,
                  borderColor: 'brand.beige',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontFamily: 'var(--font-heading), serif',
                    fontSize: { xs: '2.1rem', md: '2.3rem' },
                    lineHeight: 1,
                    color: 'brand.brown',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </Box>
                <Box sx={{ display: 'grid', gap: 0.65 }}>
                  <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.26rem' }}>
                    {step.title}
                  </Box>
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray', maxWidth: 760 }}>
                    {step.description}
                  </Box>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </SectionBlock>
  );
}
