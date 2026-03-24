'use client';

import { typeStyles } from '@/theme/typeStyles';
import Link from 'next/link';
import { Box } from '@mui/system';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';

export default function AboutPreviewSection() {
  return (
    <SectionBlock>
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
              src="/consultorio-soft.svg"
              alt="Ilustración del consultorio"
              sx={(theme) => ({
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                border: `1px solid ${theme.palette.brand.beige}`,
                boxShadow: '0 14px 30px rgba(115, 78, 64, 0.08)',
              })}
            />
          </Box>
        </Reveal>

        <Reveal delay={0.06}>
          <Box sx={{ gridColumn: { lg: 'span 7' }, display: 'grid', gap: 2.5 }}>
            <Box component="h2" sx={typeStyles.h2}>
              Sobre la Dra. Patricia Corvera
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
              Médica con formación clínica y especialización en dermatología y medicina estética. Enfoque personalizado y resultados naturales.
            </Box>
            <Box
              component={Link}
              href="/sobre"
              sx={(theme) => ({
                mt: 1,
                color: theme.palette.brand.brown,
                fontWeight: 500,
                width: 'fit-content',
                '&:hover': { color: theme.palette.brand.rose },
              })}
            >
              Conocer más
            </Box>
          </Box>
        </Reveal>
      </Box>
    </SectionBlock>
  );
}
