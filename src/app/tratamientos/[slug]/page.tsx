import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Box } from '@mui/system';
import ActionLink from '@/components/ui/ActionLink';
import FaqList from '@/components/ui/FaqList';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { TREATMENT_PLACEHOLDER_IMAGE, treatments, getTreatmentBySlug } from '@/data/treatments';
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
      <SectionBlock size="compact">
        <Reveal>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: 'repeat(12, minmax(0, 1fr))' },
              gap: { xs: 2.3, lg: 4.4 },
              alignItems: 'start',
            }}
          >
            <Box sx={{ gridColumn: { lg: 'span 7' }, display: 'grid', gap: 1.35 }}>
              <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                {treatment.categoryLabel}
              </Box>
              <Box component="h1" sx={{ ...typeStyles.h1, maxWidth: 760 }}>
                {treatment.title}
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 700, fontWeight: 500 }}>
                {treatment.shortDescription}
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.9, alignItems: 'center' }}>
                {['Plan personalizado', 'Resultados naturales', 'Seguimiento médico'].map((item, index) => (
                  <Box
                    key={item}
                    component="span"
                    sx={{
                      ...typeStyles.body2,
                      fontSize: { xs: '0.92rem', md: '0.9rem' },
                      color: 'brand.brown',
                      opacity: 0.9,
                      '&::before': index === 0 ? undefined : {
                        content: '"•"',
                        color: 'brand.beige',
                        mx: 0.7,
                      },
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: 1.2, alignItems: 'center', flexWrap: 'wrap', pt: 0.4 }}>
                <ActionLink href="/contacto" label="Agendar consulta" variant="primary" />
                <Box
                  component="a"
                  href="/tratamientos"
                  sx={{
                    ...typeStyles.body2,
                    color: 'brand.brown',
                    textDecoration: 'underline',
                    textUnderlineOffset: '0.22em',
                    textDecorationColor: 'brand.beige',
                    fontWeight: 500,
                  }}
                >
                  Ver todos los tratamientos
                </Box>
              </Box>
            </Box>

            <Box sx={{ gridColumn: { lg: 'span 5' }, position: 'relative' }}>
              <Box
                component="img"
                src={treatment.image || TREATMENT_PLACEHOLDER_IMAGE}
                alt={`Imagen de referencia de ${treatment.title}`}
                loading="lazy"
                sx={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '16 / 10',
                  objectFit: 'cover',
                  borderRadius: 1.1,
                  backgroundColor: 'background.default',
                }}
              />
              <Box
                sx={{
                  display: 'grid',
                  gap: 0.9,
                  p: { xs: 1.4, md: 1.6 },
                  position: { xs: 'static', lg: 'absolute' },
                  left: { lg: 14 },
                  right: { lg: 14 },
                  bottom: { lg: 14 },
                  mt: { xs: 1.15, lg: 0 },
                  borderRadius: 1.05,
                  backgroundColor: 'background.paper',
                  boxShadow: { xs: 'none', lg: 2 },
                }}
              >
                <Box sx={{ display: 'grid' }}>
                  <InfoRow label="Duración" value={treatment.procedure.duration} />
                  <InfoRow label="Sesiones" value={treatment.procedure.sessions} />
                  <InfoRow label="Recuperación" value={treatment.procedure.recovery} />
                </Box>
              </Box>
            </Box>
            <Box sx={{ gridColumn: { lg: '1 / span 12' }, maxWidth: 920 }}>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                {treatment.fullDescription}
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
              component="ol"
              sx={{
                m: 0,
                p: 0,
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                columnGap: { md: 3 },
              }}
            >
              {treatment.benefits.map((benefit, index) => (
                <Box
                  component="li"
                  key={benefit}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'auto minmax(0, 1fr)',
                    gap: 1.1,
                    alignItems: 'start',
                    py: 1.25,
                    borderTop: 1,
                    borderColor: 'brand.beige',
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
                      color: 'brand.brown',
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: { xs: '0.98rem', md: '0.9rem' },
                      fontWeight: 500,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Box>
                  <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.brown', m: 0, fontSize: { xs: '1rem', md: '0.98rem' } }}>
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
          <Box sx={{ display: 'grid', gap: 2, maxWidth: 980 }}>
            <Box sx={{ display: 'grid', gap: 0.9 }}>
              <Box component="h2" sx={typeStyles.h2}>
                ¿Para quién está indicado?
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray', maxWidth: 760 }}>
                Definimos indicación médica, expectativas reales y secuencia de tratamiento en consulta.
              </Box>
            </Box>
            <Box
              component="ul"
              sx={{
                m: 0,
                p: 0,
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                columnGap: { md: 3 },
              }}
            >
              {treatment.forWho.map((indication) => (
                <Box
                  component="li"
                  key={indication}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr)',
                    alignItems: 'start',
                    py: 1.25,
                    borderTop: 1,
                    borderColor: 'brand.beige',
                  }}
                >
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
              p: { xs: 3.2, md: 4.2 },
              borderRadius: 1.25,
              border: 1,
              borderColor: 'brand.petroleum',
              backgroundColor: 'background.paper',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) auto' },
              alignItems: { md: 'end' },
              gap: 2.1,
              maxWidth: 980,
            }}
          >
            <Box sx={{ display: 'grid', gap: 0.9, maxWidth: 700 }}>
              <Box component="h2" sx={typeStyles.h2}>
                ¿Querés evaluar este tratamiento?
              </Box>
              <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
                En consulta revisamos tu caso, resolvemos dudas y definimos un plan personalizado con objetivos claros.
              </Box>
            </Box>
            <Box sx={{ display: 'grid', gap: 1, justifyItems: { xs: 'start', md: 'end' } }}>
              <ActionLink href="/contacto" label="Agendar consulta" variant="primary" />
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'minmax(84px, auto) minmax(0, 1fr)',
        alignItems: 'baseline',
        gap: 1.1,
        py: 0.75,
        borderTop: 0.8,
        borderColor: 'brand.beige',
      }}
    >
      <Box
        component="span"
        sx={{
          ...typeStyles.body2,
          color: 'brand.gray',
          fontWeight: 600,
          textTransform: 'uppercase',
          fontSize: { xs: '0.74rem', md: '0.7rem' },
          letterSpacing: '0.045em',
        }}
      >
        {label}
      </Box>
      <Box component="span" sx={{ ...typeStyles.body1, color: 'brand.brown', fontWeight: 500, fontSize: { xs: '1rem', md: '0.95rem' } }}>
        {value}
      </Box>
    </Box>
  );
}
