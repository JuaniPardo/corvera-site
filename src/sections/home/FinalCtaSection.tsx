'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import ActionLink from '@/components/ui/ActionLink';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';

export default function FinalCtaSection() {
  return (
    <SectionBlock size="compact" background="background.paper">
      <Reveal>
        <Box sx={{ textAlign: 'center', display: 'grid', gap: 2.4, justifyItems: 'center', py: { xs: 2, md: 3 } }}>
          <Box component="h2" sx={{ ...typeStyles.h2, maxWidth: 720 }}>
            Tu piel merece un plan médico claro, personalizado y realista.
          </Box>
          <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 660 }}>
            Coordiná una consulta para evaluar tu caso y definir el tratamiento indicado para vos.
          </Box>
          <ActionLink href="/contacto" label="Solicitar consulta" variant="primary" />
        </Box>
      </Reveal>
    </SectionBlock>
  );
}
