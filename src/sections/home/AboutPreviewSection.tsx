'use client';

import { typeStyles } from '@/theme/typeStyles';
import Link from 'next/link';
import { Box } from '@mui/system';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';

export default function AboutPreviewSection() {
  return (
    <SectionBlock size="compact">
      <Reveal>
        <Box
          sx={{
            display: 'grid',
            gap: 2.25,
            maxWidth: 860,
            borderLeft: 2,
            borderColor: 'brand.beige',
            pl: { xs: 2.5, md: 3.5 },
          }}
        >
          <Box component="h2" sx={typeStyles.h2}>
            Sobre la Dra. Patricia Corvera
          </Box>
          <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 780 }}>
            Médica con formación clínica y especialización en dermatología y medicina estética. Su práctica integra diagnóstico responsable, técnica precisa y seguimiento continuo para resultados naturales.
          </Box>
          <Box
            component={Link}
            href="/sobre"
            sx={(theme) => ({
              mt: 0.4,
              color: theme.palette.brand.brown,
              fontWeight: 500,
              width: 'fit-content',
              '&:hover': { color: theme.palette.brand.rose },
            })}
          >
            Conocer su trayectoria
          </Box>
        </Box>
      </Reveal>
    </SectionBlock>
  );
}
