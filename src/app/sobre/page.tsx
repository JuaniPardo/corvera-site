import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import ActionLink from '@/components/ui/ActionLink';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import PageHeading from '@/sections/shared/PageHeading';

const differentials = [
  'Formación médica sólida',
  'Enfoque personalizado',
  'Resultados naturales',
  'Actualización constante',
];

export default function SobrePage() {
  return (
    <>
      <PageHeading
        title="Sobre la Dra. Patricia Corvera"
        description="Una mirada médica aplicada al cuidado de la piel."
        compact
      />

      <SectionBlock size="tight">
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
                src="/patricia-portrait.svg"
                alt="Retrato de la Dra. Patricia Corvera"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  border: 1,
                  borderColor: 'brand.beige',
                }}
              />
            </Box>
          </Reveal>

          <Reveal delay={0.06}>
            <Box sx={{ gridColumn: { lg: 'span 7' }, display: 'grid', gap: 4 }}>
              <Box sx={{ display: 'grid', gap: 1.5 }}>
                <Box component="h2" sx={{ ...typeStyles.h3, color: 'brand.brown' }}>
                  Intro
                </Box>
                <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                  La Dra. Patricia Corvera es médica formada con una sólida base clínica y una trayectoria que integra la dermatología con la estética médica. Su práctica se apoya en la experiencia hospitalaria, la formación académica y la actualización constante.
                </Box>
              </Box>

              <Box sx={{ display: 'grid', gap: 1.5 }}>
                <Box component="h2" sx={{ ...typeStyles.h3, color: 'brand.brown' }}>
                  Historia
                </Box>
                <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                  Inició su formación médica en Bolivia y continuó su desarrollo profesional en Argentina, donde realizó su residencia en pediatría en la Universidad de Buenos Aires y consolidó su experiencia en el ámbito hospitalario.                </Box>
              </Box>
            </Box>
          </Reveal>
        </Box>
      </SectionBlock>

      <SectionBlock size="compact" background="background.paper">
        <Box sx={{ display: 'grid', gap: 4 }}>
          <Reveal>
            <Box component="h2" sx={typeStyles.h2}>
              Diferenciales
            </Box>
          </Reveal>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
              gap: 2.5,
            }}
          >
            {differentials.map((item, index) => (
              <Reveal key={item} delay={0.03 * index}>
                <Box
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    borderRadius: 1.5,
                    border: 1,
                    borderColor: 'brand.beige',
                    backgroundColor: 'background.default',
                    display: 'grid',
                    gap: 1.2,
                    minHeight: 132,
                  }}
                >
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                    {String(index + 1).padStart(2, '0')}
                  </Box>
                  <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.22rem' }}>
                    {item}
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
              borderColor: 'brand.beige',
              backgroundColor: 'brand.nude',
              display: 'grid',
              gap: 2.5,
              maxWidth: 860,
            }}
          >
            <Box component="h2" sx={typeStyles.h2}>
              Filosofía
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
              Cada tratamiento es una decisión médica. El objetivo no es transformar, sino acompañar procesos de mejora respetando la identidad del paciente.
            </Box>
            <Box sx={{ pt: 0.5 }}>
              <ActionLink href="/contacto" label="Solicitar turno" />
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>
    </>
  );
}
