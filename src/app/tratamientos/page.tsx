'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import PageHeading from '@/sections/shared/PageHeading';
import { clinicalDermatology, medicalAesthetics } from '@/data/siteContent';

function TreatmentGroup({
  title,
  items,
  delay,
}: {
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <Box
        sx={(theme) => ({
          display: 'grid',
          gap: 2.5,
          p: { xs: 3, md: 4 },
          borderRadius: 1.5,
          border: `1px solid ${theme.palette.brand.beige}`,
          backgroundColor: theme.palette.background.paper,
          height: '100%',
        })}
      >
        <Box component="h2" sx={{ ...typeStyles.h2, fontSize: '2rem' }}>
          {title}
        </Box>
        <Box component="ul" sx={{ m: 0, pl: 2.5, display: 'grid', gap: 1.25 }}>
          {items.map((item) => (
            <Box
              key={item}
              component="li"
              sx={(theme) => ({
                ...(typeStyles.body1),
                color: theme.palette.brand.gray,
              })}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </Reveal>
  );
}

export default function TratamientosPage() {
  return (
    <>
      <PageHeading
        title="Tratamientos"
        description="Separación clara entre dermatología clínica y estética médica para elegir el enfoque indicado en cada consulta."
        compact
      />

      <SectionBlock size="compact">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
            gap: 3,
          }}
        >
          <TreatmentGroup title="Dermatología clínica" items={clinicalDermatology} />
          <TreatmentGroup title="Estética médica" items={medicalAesthetics} delay={0.06} />
        </Box>
      </SectionBlock>
    </>
  );
}
