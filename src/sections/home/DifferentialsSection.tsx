'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import LineIcon from '@/components/ui/LineIcon';
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

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
            gap: 2.25,
          }}
        >
          {differencials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Box
                sx={{
                  display: 'grid',
                  gap: 1.1,
                  p: { xs: 2.6, md: 3.1 },
                  borderRadius: 1.5,
                  border: 1,
                  borderColor: 'brand.beige',
                  backgroundColor: 'background.paper',
                  minHeight: 182,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                  <LineIcon name={item.icon} />
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                    {String(index + 1).padStart(2, '0')}
                  </Box>
                </Box>
                <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.2rem' }}>
                  {item.title}
                </Box>
                <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray', maxWidth: 440 }}>
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
