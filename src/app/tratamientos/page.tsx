'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import ActionLink from '@/components/ui/ActionLink';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import PageHeading from '@/sections/shared/PageHeading';
import { clinicalDermatology, medicalAesthetics } from '@/data/siteContent';

const clinicalDescriptions: Record<string, string> = {
  'Acné y secuelas':
    'Abordaje integral para controlar brotes, mejorar textura y prevenir nuevas marcas.',
  'Rosácea y dermatitis':
    'Plan clínico para estabilizar la piel sensible y reducir episodios inflamatorios.',
  'Control de lunares y lesiones cutáneas':
    'Evaluación médica periódica para seguimiento seguro de lesiones pigmentadas y otras alteraciones.',
  'Melasma y pigmentaciones':
    'Protocolos personalizados para unificar tono y sostener resultados en el tiempo.',
};

const aestheticsDescriptions: Record<string, string> = {
  'Armonización facial':
    'Plan progresivo para equilibrar proporciones manteniendo naturalidad y expresividad.',
  'Toxina botulínica':
    'Aplicación precisa para suavizar líneas dinámicas sin endurecer los rasgos.',
  'Rellenos con ácido hialurónico':
    'Reposición de volumen y definición de contornos con criterio médico.',
  'Bioestimulación de colágeno':
    'Estimulación gradual para mejorar firmeza, calidad y estructura de la piel.',
  'Protocolos de calidad de piel':
    'Combinación de técnicas para optimizar hidratación, luminosidad y textura.',
};

export default function TratamientosPage() {
  return (
    <>
      <PageHeading
        title="Tratamientos"
        description="Diagnóstico médico preciso y tratamientos personalizados para cuidar, corregir y armonizar la piel."
        compact
      />

      <SectionBlock size="compact">
        <Reveal>
          <Box sx={{ display: 'grid', gap: 3.5, maxWidth: 980 }}>
            <Box component="h2" sx={typeStyles.h2}>
              Dermatología clínica
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 820 }}>
              Evaluación médica para diagnóstico, tratamiento y seguimiento de condiciones cutáneas frecuentes, con foco en seguridad y evolución sostenida.
            </Box>

            <Box sx={{ display: 'grid', gap: { xs: 2.1, md: 2.4 } }}>
              {clinicalDermatology.map((item, index) => (
                <Box
                  key={item}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '220px minmax(0, 1fr)' },
                    gap: { xs: 0.8, md: 3 },
                    py: { xs: 0.5, md: 0.8 },
                  }}
                >
                  <Box component="p" sx={{ ...typeStyles.body1, fontWeight: 500, color: 'brand.text' }}>
                    {String(index + 1).padStart(2, '0')} {item}
                  </Box>
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray' }}>
                    {clinicalDescriptions[item]}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>

      <SectionBlock size="tight">
        <Box sx={{ borderTop: 1, borderColor: 'brand.beige' }} />
      </SectionBlock>

      <SectionBlock size="compact" background="background.paper">
        <Reveal delay={0.05}>
          <Box
            sx={{
              display: 'grid',
              gap: 4,
              p: { xs: 4, md: 6 },
              borderRadius: 1.5,
              border: 1,
              borderColor: 'brand.beige',
              backgroundColor: 'background.default',
            }}
          >
            <Box component="h2" sx={typeStyles.h2}>
              Estética médica
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 860 }}>
              Tratamientos orientados a resultados armónicos y naturales, diseñados según proporciones faciales, calidad de piel y tiempos de cada paciente.
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 2.75 }}>
              {medicalAesthetics.map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: 'grid',
                    gap: 0.65,
                    py: 1.55,
                    borderTop: 1,
                    borderColor: 'brand.beige',
                  }}
                >
                  <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.2rem' }}>
                    {item}
                  </Box>
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray' }}>
                    {aestheticsDescriptions[item]}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>

      <SectionBlock size="compact">
        <Box sx={{ display: 'grid', justifyItems: 'center', gap: 2 }}>
          <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', textAlign: 'center', maxWidth: 640 }}>
            Si querés definir el enfoque indicado para tu caso, coordiná una consulta de evaluación.
          </Box>
          <ActionLink href="/contacto" label="Solicitar consulta" variant="primary" />
        </Box>
      </SectionBlock>
    </>
  );
}
