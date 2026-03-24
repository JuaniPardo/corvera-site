import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Box } from '@mui/system';
import ActionLink from '@/components/ui/ActionLink';
import FaqList from '@/components/ui/FaqList';
import LineIcon from '@/components/ui/LineIcon';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { treatments, getTreatmentBySlug } from '@/data/treatments';
import PageHeading from '@/sections/shared/PageHeading';
import { typeStyles } from '@/theme/typeStyles';

type TreatmentPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return {
      title: 'Tratamiento no encontrado | Dra. Patricia Corvera',
    };
  }

  return {
    title: `${treatment.title} | Dra. Patricia Corvera`,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  return (
    <>
      <PageHeading
        title={treatment.title}
        description={treatment.shortDescription}
        compact
      />

      <SectionBlock size="tight">
        <Reveal>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: 'repeat(12, minmax(0, 1fr))' },
              gap: { xs: 3, lg: 4.5 },
              alignItems: 'start',
            }}
          >
            <Box sx={{ gridColumn: { lg: 'span 7' }, display: 'grid', gap: 1.7 }}>
              <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                {treatment.categoryLabel}
              </Box>
              <Box component="h2" sx={{ ...typeStyles.h2, maxWidth: 720 }}>
                Evaluación médica y plan progresivo para resultados naturales.
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 720 }}>
                {treatment.fullDescription}
              </Box>
            </Box>

            <Box sx={{ gridColumn: { lg: 'span 5' }, display: 'grid', gap: 1.6 }}>
              <Box
                sx={{
                  display: 'grid',
                  gap: 1.6,
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 1.7,
                  border: 1,
                  borderColor: 'brand.beige',
                  backgroundColor: 'background.paper',
                  boxShadow: 3,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <LineIcon name={treatment.icon} />
                  <Box>
                    <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                      Datos del procedimiento
                    </Box>
                    <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray' }}>
                      Planificado según diagnóstico, objetivos y evolución clínica.
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'grid', gap: 1.1 }}>
                  <InfoCard label="Duración" value={treatment.procedure.duration} />
                  <InfoCard label="Sesiones" value={treatment.procedure.sessions} />
                  <InfoCard label="Recuperación" value={treatment.procedure.recovery} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>

      <SectionBlock size="compact" background="background.paper">
        <Reveal>
          <Box sx={{ display: 'grid', gap: 2.8, maxWidth: 1020 }}>
            <Box component="h2" sx={typeStyles.h2}>
              Beneficios esperados
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                gap: 1.35,
              }}
            >
              {treatment.benefits.map((benefit, index) => (
                <Box
                  key={benefit}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'auto minmax(0, 1fr)',
                    gap: 1.4,
                    alignItems: 'start',
                    p: { xs: 2, md: 2.2 },
                    borderRadius: 1.5,
                    border: 1,
                    borderColor: 'brand.beige',
                    backgroundColor: 'background.default',
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      border: 1,
                      borderColor: 'brand.beige',
                      color: 'brand.rose',
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Box>
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.brown', m: 0 }}>
                    {benefit}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>

      <SectionBlock size="compact">
        <Reveal>
          <Box sx={{ display: 'grid', gap: 2.3, maxWidth: 980 }}>
            <Box sx={{ display: 'grid', gap: 0.9 }}>
              <Box component="h2" sx={typeStyles.h2}>
                ¿Para quién está indicado?
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 760 }}>
                Definimos indicación médica, expectativas reales y secuencia de tratamiento en consulta.
              </Box>
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                gap: 1.1,
              }}
            >
              {treatment.forWho.map((indication) => (
                <Box
                  key={indication}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'auto minmax(0, 1fr)',
                    gap: 1.2,
                    alignItems: 'start',
                    p: { xs: 1.85, md: 2.1 },
                    borderRadius: 1.35,
                    border: 1,
                    borderColor: 'brand.beige',
                    backgroundColor: 'background.paper',
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      mt: 0.35,
                      width: 9,
                      height: 9,
                      borderRadius: '50%',
                      backgroundColor: 'brand.rose',
                    }}
                  />
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.brown', m: 0 }}>
                    {indication}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>

      {treatment.faq.length > 0 && (
        <SectionBlock size="compact" background="background.paper">
          <Reveal>
            <Box sx={{ display: 'grid', gap: 1.4, maxWidth: 980 }}>
              <Box component="h2" sx={typeStyles.h2}>
                Preguntas frecuentes
              </Box>
              <FaqList items={treatment.faq} defaultOpenIndex={0} />
            </Box>
          </Reveal>
        </SectionBlock>
      )}

      <SectionBlock size="tight">
        <Reveal>
          <Box
            sx={{
              p: { xs: 3.2, md: 4.6 },
              borderRadius: 1.8,
              border: 1,
              borderColor: 'brand.petroleum',
              backgroundColor: 'brand.petroleum',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) auto' },
              alignItems: { md: 'end' },
              gap: 2.4,
              maxWidth: 980,
              boxShadow: 4,
            }}
          >
            <Box sx={{ display: 'grid', gap: 1.2, maxWidth: 700 }}>
              <Box component="h2" sx={{ ...typeStyles.h2, color: 'primary.contrastText' }}>
                ¿Querés evaluar este tratamiento?
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'primary.contrastText', opacity: 0.9 }}>
                En consulta revisamos tu caso, resolvemos dudas y definimos un plan personalizado con objetivos claros.
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1.1, flexWrap: 'wrap' }}>
              <ActionLink href="/contacto" label="Agendar consulta" variant="secondary" />
              <ActionLink href="/tratamientos" label="Ver todos los tratamientos" variant="secondary" />
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>
    </>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 0.35,
        p: 1.45,
        borderRadius: 1.2,
        border: 1,
        borderColor: 'brand.beige',
        backgroundColor: 'brand.nude',
      }}
    >
      <Box
        component="span"
        sx={{
          ...typeStyles.body2,
          color: 'brand.rose',
          fontWeight: 600,
          textTransform: 'uppercase',
          fontSize: '0.72rem',
          letterSpacing: '0.06em',
        }}
      >
        {label}
      </Box>
      <Box component="span" sx={{ ...typeStyles.body1, color: 'brand.brown', fontWeight: 500 }}>
        {value}
      </Box>
    </Box>
  );
}
