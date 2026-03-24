'use client';

import Link from 'next/link';
import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import { alpha } from '@mui/material/styles';
import ActionLink from '@/components/ui/ActionLink';
import LineIcon from '@/components/ui/LineIcon';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import PageHeading from '@/sections/shared/PageHeading';
import { getTreatmentsByCategory } from '@/data/treatments';

export default function TratamientosPage() {
  return (
    <>
      <PageHeading
        title="Tratamientos"
        description="Opciones médicas personalizadas para tratar, mejorar y armonizar la piel con resultados naturales."
        compact
      />

      <SectionBlock size="compact">
        <Reveal>
          <Box sx={{ display: 'grid', gap: 3.2, maxWidth: 1020 }}>
            <Box component="h2" sx={{ ...typeStyles.h2, fontSize: 'clamp(2rem, 3.15vw, 3.15rem)' }}>
              Dermatología clínica
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 820, mb: 0.7 }}>
              Tratamientos para resolver problemas frecuentes de piel con diagnóstico preciso y seguimiento continuo.
            </Box>

            <Box sx={{ display: 'grid', gap: 1.9 }}>
              {getTreatmentsByCategory('dermatologia').map((treatment, index) => (
                <Box
                  component={Link}
                  href={`/tratamientos/${treatment.slug}`}
                  key={treatment.slug}
                  sx={(theme) => ({
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '68px minmax(0, 280px) minmax(0, 1fr)' },
                    alignItems: { md: 'center' },
                    gap: { xs: 1, md: 2.2 },
                    p: { xs: 2.25, md: 2.4 },
                    border: 1,
                    borderColor: 'brand.beige',
                    borderRadius: 1.5,
                    backgroundColor: 'background.paper',
                    minHeight: { md: 138 },
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'transform 220ms ease, box-shadow 240ms ease',
                    '@media (hover: hover)': {
                      '&:hover': {
                        transform: 'scale(1.01)',
                        boxShadow: `0 15px 28px ${alpha(theme.palette.brand.petroleum, 0.1)}`,
                      },
                    },
                  })}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'space-between', md: 'center' }, gap: 2 }}>
                    <LineIcon name={treatment.icon} />
                    <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                      {String(index + 1).padStart(2, '0')}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'grid', gap: 0.65 }}>
                    <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.16rem' }}>
                      {treatment.title}
                    </Box>
                    <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.brown', fontWeight: 500 }}>
                      {treatment.benefits[0]}
                    </Box>
                  </Box>
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray', maxWidth: 470 }}>
                    {treatment.shortDescription}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>

      <SectionBlock size="compact" background="brand.petroleum">
        <Reveal delay={0.05}>
          <Box
            sx={{
              display: 'grid',
              gap: 4,
              p: { xs: 4, md: 5 },
              borderRadius: 1.5,
              border: 1,
              borderColor: 'brand.beige',
              backgroundColor: 'background.paper',
            }}
          >
            <Box component="h2" sx={{ ...typeStyles.h2, fontSize: 'clamp(2rem, 3.15vw, 3.15rem)' }}>
              Estética médica
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 860 }}>
              Procedimientos orientados a mejorar armonía y calidad de piel respetando proporciones y tiempos biológicos.
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 2.2 }}>
              {getTreatmentsByCategory('estetica').map((treatment, index) => (
                <Box
                  component={Link}
                  href={`/tratamientos/${treatment.slug}`}
                  key={treatment.slug}
                  sx={(theme) => ({
                    display: 'grid',
                    gap: 1.05,
                    p: { xs: 2.25, md: 2.5 },
                    border: 1,
                    borderColor: 'brand.beige',
                    borderRadius: 1.5,
                    backgroundColor: 'background.default',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'transform 220ms ease, box-shadow 240ms ease',
                    '@media (hover: hover)': {
                      '&:hover': {
                        transform: 'scale(1.012)',
                        boxShadow: `0 16px 30px ${alpha(theme.palette.brand.petroleum, 0.11)}`,
                      },
                    },
                  })}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                    <LineIcon name={treatment.icon} />
                    <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                      {String(index + 1).padStart(2, '0')}
                    </Box>
                  </Box>
                  <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.2rem' }}>
                    {treatment.title}
                  </Box>
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.brown', fontWeight: 500 }}>
                    {treatment.benefits[0]}
                  </Box>
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray' }}>
                    {treatment.shortDescription}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>

      <SectionBlock size="compact">
        <Box
          sx={{
            display: 'grid',
            justifyItems: 'center',
            gap: 2,
            p: { xs: 3.2, md: 4.5 },
            borderRadius: 1.7,
            border: 1,
            borderColor: 'brand.petroleum',
            backgroundColor: 'brand.petroleum',
          }}
        >
          <Box component="p" sx={{ ...typeStyles.body1, color: 'background.paper', textAlign: 'center', maxWidth: 680, opacity: 0.9 }}>
            Si querés definir el enfoque indicado para tu caso, coordiná una consulta de evaluación.
          </Box>
          <ActionLink href="/contacto" label="Solicitar consulta personalizada" variant="secondary" />
        </Box>
      </SectionBlock>
    </>
  );
}
