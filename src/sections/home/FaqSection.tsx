'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import FaqList from '@/components/ui/FaqList';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { faqItems } from '@/data/siteContent';

export default function FaqSection() {
  return (
    <SectionBlock size="compact">
      <Box sx={{ display: 'grid', gap: 4.5 }}>
        <Reveal>
          <Box sx={{ display: 'grid', gap: 2, maxWidth: 760 }}>
            <Box component="h2" sx={typeStyles.h2}>
              Preguntas frecuentes
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
              Respuestas directas para ayudarte a tomar una decisión informada.
            </Box>
          </Box>
        </Reveal>

        <Reveal delay={0.04}>
          <Box sx={{ maxWidth: 980 }}>
            <FaqList items={faqItems.slice(0, 4)} defaultOpenIndex={0} />
          </Box>
        </Reveal>
      </Box>
    </SectionBlock>
  );
}
