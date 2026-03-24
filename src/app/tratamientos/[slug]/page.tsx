import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Box } from '@mui/system';
import { treatments, getTreatmentBySlug } from '@/data/treatments';
import { typeStyles } from '@/theme/typeStyles';
import SectionBlock from '@/components/ui/SectionBlock';
import ActionLink from '@/components/ui/ActionLink';
import Reveal from '@/components/ui/Reveal';
import PageHeading from '@/sections/shared/PageHeading';

// Generate static params for all treatments
export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return {
      title: 'Tratamiento no encontrado',
    };
  }

  return {
    title: `${treatment.title} | Dra. Patricia Corvera`,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  return (
    <>
      <PageHeading
        title={treatment.title}
        subtitle={treatment.categoryLabel}
      />

      {/* Descripción principal */}
      <SectionBlock bg="white">
        <Reveal>
          <Box
            sx={{
              maxWidth: 800,
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            <Box
              component="p"
              sx={{
                ...typeStyles.body1,
                color: 'brand.brown',
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              {treatment.fullDescription}
            </Box>

            {/* Info cards */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: 3,
                mt: 5,
              }}
            >
              <InfoCard label="Duración" value={treatment.procedure.duration} />
              <InfoCard label="Sesiones" value={treatment.procedure.sessions} />
              <InfoCard label="Recuperación" value={treatment.procedure.recovery} />
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>

      {/* Beneficios */}
      <SectionBlock bg="beige">
        <Reveal>
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Box
              component="h2"
              sx={{
                ...typeStyles.h3,
                color: 'brand.brown',
                textAlign: 'center',
                mb: 4,
              }}
            >
              Beneficios del tratamiento
            </Box>
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                p: 0,
                m: 0,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 2,
              }}
            >
              {treatment.benefits.map((benefit, index) => (
                <Box
                  component="li"
                  key={index}
                  sx={{
                    ...typeStyles.body2,
                    color: 'brand.brown',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    p: 2,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: 'brand.rose',
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      lineHeight: 1,
                    }}
                  >
                    ✓
                  </Box>
                  {benefit}
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>

      {/* Indicaciones - Para quién */}
      <SectionBlock bg="white">
        <Reveal>
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Box
              component="h2"
              sx={{
                ...typeStyles.h3,
                color: 'brand.brown',
                textAlign: 'center',
                mb: 4,
              }}
            >
              Indicado para
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {treatment.forWho.map((indication, index) => (
                <Box
                  key={index}
                  sx={{
                    ...typeStyles.body2,
                    color: 'brand.brown',
                    px: 3,
                    py: 1.5,
                    backgroundColor: 'brand.beige',
                    borderRadius: 50,
                    border: '1px solid',
                    borderColor: 'brand.rose',
                  }}
                >
                  {indication}
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>

      {/* FAQ del tratamiento */}
      {treatment.faq && treatment.faq.length > 0 && (
        <SectionBlock bg="beige">
          <Reveal>
            <Box sx={{ maxWidth: 800, mx: 'auto' }}>
              <Box
                component="h2"
                sx={{
                  ...typeStyles.h3,
                  color: 'brand.brown',
                  textAlign: 'center',
                  mb: 4,
                }}
              >
                Preguntas frecuentes
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {treatment.faq.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: 'white',
                      borderRadius: 2,
                      p: 3,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    }}
                  >
                    <Box
                      component="h3"
                      sx={{
                        ...typeStyles.body1,
                        fontWeight: 600,
                        color: 'brand.brown',
                        mb: 1,
                      }}
                    >
                      {item.question}
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        ...typeStyles.body2,
                        color: 'brand.brown',
                        opacity: 0.85,
                        m: 0,
                      }}
                    >
                      {item.answer}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Reveal>
        </SectionBlock>
      )}

      {/* CTA Final */}
      <SectionBlock bg="white">
        <Reveal>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            <Box
              component="h2"
              sx={{
                ...typeStyles.h3,
                color: 'brand.brown',
                mb: 2,
              }}
            >
              ¿Te interesa este tratamiento?
            </Box>
            <Box
              component="p"
              sx={{
                ...typeStyles.body2,
                color: 'brand.brown',
                opacity: 0.85,
                mb: 4,
              }}
            >
              Agendá una consulta para evaluar tu caso de manera personalizada y diseñar el plan de tratamiento ideal para vos.
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: 'center',
              }}
            >
              <ActionLink href="/contacto" variant="primary">
                Agendar consulta
              </ActionLink>
              <ActionLink href="/tratamientos" variant="secondary">
                Ver todos los tratamientos
              </ActionLink>
            </Box>
          </Box>
        </Reveal>
      </SectionBlock>
    </>
  );
}

// Componente auxiliar para las tarjetas de información
function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: 'brand.beige',
        borderRadius: 2,
        textAlign: 'center',
      }}
    >
      <Box
        component="span"
        sx={{
          ...typeStyles.body2,
          color: 'brand.rose',
          fontWeight: 600,
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          display: 'block',
          mb: 0.5,
        }}
      >
        {label}
      </Box>
      <Box
        component="span"
        sx={{
          ...typeStyles.body1,
          color: 'brand.brown',
          fontWeight: 500,
        }}
      >
        {value}
      </Box>
    </Box>
  );
}
