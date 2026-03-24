import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import ActionLink from '@/components/ui/ActionLink';
import LineIcon from '@/components/ui/LineIcon';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import PageHeading from '@/sections/shared/PageHeading';

const differentials = [
  { title: 'Formación médica sólida', icon: 'focus' as const },
  { title: 'Enfoque personalizado', icon: 'leaf' as const },
  { title: 'Resultados naturales', icon: 'path' as const },
  { title: 'Actualización constante', icon: 'home' as const },
];

export default function SobrePage() {
  return (
    <>
      <PageHeading
        title="Sobre la Dra. Patricia Corvera"
        description="Una práctica médica cercana, enfocada en resultados naturales y decisiones clínicas responsables."
        compact
      />

      <SectionBlock size="tight">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(12, minmax(0, 1fr))' },
            gap: { xs: 4, lg: 6 },
            alignItems: { lg: 'start' },
          }}
        >
          <Reveal delay={0.04}>
            <Box sx={{ gridColumn: { lg: 'span 6' }, display: 'grid', gap: 2.5 }}>
              <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                Perfil profesional
              </Box>
              <Box component="h2" sx={{ ...typeStyles.h2, maxWidth: 580 }}>
                Trayectoria clínica y estética con mirada médica integral.
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 590 }}>
                La Dra. Patricia Corvera integra dermatología y medicina estética desde un abordaje clínico, con experiencia hospitalaria y formación académica continua.
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 590 }}>
                Se formó en Bolivia y consolidó su desarrollo en Argentina, incluyendo residencia en pediatría en la Universidad de Buenos Aires y práctica médica orientada a seguridad y naturalidad.
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.1 }}>
                {['Residencia UBA', 'Experiencia hospitalaria', 'Actualización continua'].map((item) => (
                  <Box
                    key={item}
                    component="span"
                    sx={{
                      px: 1.35,
                      py: 0.7,
                      border: 1,
                      borderColor: 'brand.beige',
                      borderRadius: 1,
                      backgroundColor: 'background.paper',
                      fontSize: '0.8rem',
                      lineHeight: 1.2,
                      color: 'brand.brown',
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
          </Reveal>

          <Reveal>
            <Box sx={{ gridColumn: { lg: 'span 6' }, display: 'grid', gap: 1.6 }}>
              <Box
                component="img"
                src="/paty02.webp"
                alt="Retrato de la Dra. Patricia Corvera"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'brand.beige',
                  backgroundColor: 'background.paper',
                }}
              />
              <Box
                component="img"
                src="/paty01.webp"
                alt="Detalle de la Dra. Patricia Corvera en consulta"
                sx={{
                  width: { xs: '58%', sm: '44%' },
                  justifySelf: 'end',
                  height: 'auto',
                  borderRadius: 1.6,
                  border: 1,
                  borderColor: 'brand.beige',
                  backgroundColor: 'background.paper',
                }}
              />
            </Box>
          </Reveal>
        </Box>
      </SectionBlock>

      <SectionBlock size="compact" background="background.paper">
        <Box sx={{ display: 'grid', gap: 4 }}>
          <Reveal>
            <Box sx={{ display: 'grid', gap: 1.2, maxWidth: 760 }}>
              <Box component="h2" sx={typeStyles.h2}>
                Diferenciales profesionales
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                Una atención que combina criterio médico, escucha activa y planificación clara.
              </Box>
            </Box>
          </Reveal>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
              gap: 2.2,
            }}
          >
            {differentials.map((item, index) => (
              <Reveal key={item.title} delay={0.03 * index}>
                <Box
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    borderRadius: 1.5,
                    border: 1,
                    borderColor: 'brand.beige',
                    backgroundColor: 'background.default',
                    display: 'grid',
                    gap: 1.25,
                    minHeight: 168,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <LineIcon name={item.icon} />
                    <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                      {String(index + 1).padStart(2, '0')}
                    </Box>
                  </Box>
                  <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.22rem' }}>
                    {item.title}
                  </Box>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </SectionBlock>

      <SectionBlock size="tight">
        <Reveal>
          <Box
            sx={{
              p: { xs: 3.5, md: 5 },
              borderRadius: 2,
              border: 1,
              borderColor: 'brand.petroleum',
              backgroundColor: 'brand.petroleum',
              display: 'grid',
              gap: 2.5,
              maxWidth: 860,
            }}
          >
            <Box component="h2" sx={{ ...typeStyles.h2, color: 'background.paper' }}>
              Filosofía
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'background.paper', opacity: 0.9 }}>
              Cada tratamiento es una decisión médica. El objetivo no es transformar, sino acompañar procesos de mejora respetando la identidad del paciente.
            </Box>
            <Box sx={{ pt: 0.5 }}>
              <ActionLink href="/contacto" label="Solicitar consulta médica" variant="secondary" />
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>
    </>
  );
}
