'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import ActionLink from '@/components/ui/ActionLink';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';

export default function FinalCtaSection() {
  return (
    <SectionBlock>
      <Reveal>
        <Box
          sx={(theme) => ({
            textAlign: 'center',
            display: 'grid',
            gap: 3,
            justifyItems: 'center',
            border: `1px solid ${theme.palette.brand.beige}`,
            borderRadius: 2,
            py: { xs: 6, md: 8 },
            px: { xs: 3, md: 4 },
            backgroundColor: theme.palette.background.paper,
          })}
        >
          <Box component="h2" sx={{ ...typeStyles.h2, maxWidth: 720 }}>
            Empezá con una consulta profesional para definir el tratamiento indicado para vos.
          </Box>
          <Box
            component="p"
            sx={(theme) => ({
              ...(typeStyles.body1),
              color: theme.palette.brand.gray,
              maxWidth: 640,
            })}
          >
            Un plan médico claro, personalizado y con seguimiento en cada etapa.
          </Box>
          <ActionLink href="/contacto" label="Agendar consulta" variant="primary" />
        </Box>
      </Reveal>
    </SectionBlock>
  );
}
