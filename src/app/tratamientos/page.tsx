'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import ActionLink from '@/components/ui/ActionLink';
import LineIcon from '@/components/ui/LineIcon';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import PageHeading from '@/sections/shared/PageHeading';
import { clinicalDermatology, medicalAesthetics } from '@/data/siteContent';

const clinicalDescriptions: Record<
  string,
  { benefit: string; description: string; icon: 'focus' | 'leaf' | 'path' | 'home' }
> = {
  'Acné y secuelas':
    {
      benefit: 'Menos brotes y mejor textura de piel.',
      description: 'Abordaje integral para controlar inflamación y tratar marcas residuales.',
      icon: 'focus',
    },
  'Rosácea y dermatitis':
    {
      benefit: 'Piel más estable y menos reactividad diaria.',
      description: 'Plan médico para reducir episodios inflamatorios y reforzar barrera cutánea.',
      icon: 'leaf',
    },
  'Control de lunares y lesiones cutáneas':
    {
      benefit: 'Seguimiento seguro y detección temprana.',
      description: 'Evaluación periódica de lesiones pigmentadas y otras alteraciones cutáneas.',
      icon: 'home',
    },
  'Melasma y pigmentaciones':
    {
      benefit: 'Tono más uniforme con plan de mantenimiento.',
      description: 'Protocolos personalizados para despigmentar de forma gradual y sostenida.',
      icon: 'path',
    },
};

const aestheticsDescriptions: Record<
  string,
  { benefit: string; description: string; icon: 'focus' | 'leaf' | 'path' | 'home' }
> = {
  'Armonización facial': {
    benefit: 'Rasgos equilibrados manteniendo tu expresión.',
    description: 'Plan progresivo para mejorar proporciones sin cambios artificiales.',
    icon: 'path',
  },
  'Toxina botulínica': {
    benefit: 'Líneas dinámicas más suaves sin rigidez.',
    description: 'Aplicación precisa en dosis personalizadas según gesto y anatomía.',
    icon: 'focus',
  },
  'Rellenos con ácido hialurónico': {
    benefit: 'Reposición de volumen con resultado natural.',
    description: 'Definición de contornos y soporte estructural con criterio médico.',
    icon: 'home',
  },
  'Bioestimulación de colágeno': {
    benefit: 'Más firmeza y mejor calidad de piel.',
    description: 'Estimulación gradual para sostener resultados en el tiempo.',
    icon: 'leaf',
  },
  'Protocolos de calidad de piel': {
    benefit: 'Piel más luminosa, hidratada y pareja.',
    description: 'Combinación de técnicas según diagnóstico y objetivos reales.',
    icon: 'focus',
  },
};

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
          <Box sx={{ display: 'grid', gap: 3.5, maxWidth: 980 }}>
            <Box component="h2" sx={typeStyles.h2}>
              Dermatología clínica
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 820, mb: 0.7 }}>
              Tratamientos para resolver problemas frecuentes de piel con diagnóstico preciso y seguimiento continuo.
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 2.2 }}>
              {clinicalDermatology.map((item, index) => (
                <Box
                  key={item}
                  sx={{
                    display: 'grid',
                    gap: 1.05,
                    p: { xs: 2.4, md: 2.8 },
                    border: 1,
                    borderColor: 'brand.beige',
                    borderRadius: 1.5,
                    backgroundColor: 'background.paper',
                    minHeight: 198,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                    <LineIcon name={clinicalDescriptions[item].icon} />
                    <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                      {String(index + 1).padStart(2, '0')}
                    </Box>
                  </Box>
                  <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.2rem' }}>
                    {item}
                  </Box>
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.brown', fontWeight: 500 }}>
                    {clinicalDescriptions[item].benefit}
                  </Box>
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray' }}>
                    {clinicalDescriptions[item].description}
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
            <Box component="h2" sx={typeStyles.h2}>
              Estética médica
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 860 }}>
              Procedimientos orientados a mejorar armonía y calidad de piel respetando proporciones y tiempos biológicos.
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 2.2 }}>
              {medicalAesthetics.map((item, index) => (
                <Box
                  key={item}
                  sx={{
                    display: 'grid',
                    gap: 1.05,
                    p: { xs: 2.25, md: 2.5 },
                    border: 1,
                    borderColor: 'brand.beige',
                    borderRadius: 1.5,
                    backgroundColor: 'background.default',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                    <LineIcon name={aestheticsDescriptions[item].icon} />
                    <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                      {String(index + 1).padStart(2, '0')}
                    </Box>
                  </Box>
                  <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.2rem' }}>
                    {item}
                  </Box>
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.brown', fontWeight: 500 }}>
                    {aestheticsDescriptions[item].benefit}
                  </Box>
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray' }}>
                    {aestheticsDescriptions[item].description}
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
