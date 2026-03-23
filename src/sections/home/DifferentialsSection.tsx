'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import InfoCard from '@/components/ui/InfoCard';
import LineIcon from '@/components/ui/LineIcon';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { differencials } from '@/data/siteContent';

export default function DifferentialsSection() {
  return (
    <SectionBlock>
      <Box sx={{ display: 'grid', gap: 5 }}>
        <Reveal>
          <Box sx={{ display: 'grid', gap: 2, maxWidth: 740 }}>
            <Box component="h2" sx={typeStyles.h2}>
              Diferenciales de atención
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
              Un enfoque personalizado para lograr resultados armónicos con respaldo profesional.
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
          {differencials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <InfoCard title={item.title} description={item.description}>
                <LineIcon name={item.icon as 'focus' | 'leaf' | 'path' | 'home'} />
              </InfoCard>
            </Reveal>
          ))}
        </Box>
      </Box>
    </SectionBlock>
  );
}
