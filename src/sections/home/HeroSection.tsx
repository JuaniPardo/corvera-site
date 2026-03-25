'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import ActionLink from '@/components/ui/ActionLink';
import { alpha } from '@mui/material/styles';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';

export default function HeroSection() {
  return (
    <SectionBlock size="compact" background="background.paper">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(12, minmax(0, 1fr))' },
          alignItems: 'center',
          gap: { xs: 5.5, lg: 7 },
        }}
      >
        <Reveal>
          <Box
            sx={(theme) => ({
              gridColumn: { lg: 'span 7' },
              display: 'grid',
              gap: 3.25,
              p: { xs: 0, md: 4 },
              borderRadius: { md: 2 },
              border: { md: `1px solid ${theme.palette.brand.beige}` },
              backgroundColor: { md: alpha(theme.palette.brand.petroleum, 0.055) },
              boxShadow: { md: `0 20px 44px ${alpha(theme.palette.brand.petroleum, 0.11)}` },
            })}
          >
            <Box component="h1" sx={{ ...typeStyles.h1, maxWidth: 680, fontSize: 'clamp(2.55rem, 5.6vw, 4.7rem)' }}>
              Resultados naturales para tu piel, con criterio médico en cada decisión.
            </Box>

            <Box
              component="p"
              sx={(theme) => ({
                ...(typeStyles.body1),
                color: theme.palette.brand.gray,
                maxWidth: 590,
              })}
            >
              Consulta médica personalizada para tratar, prevenir y mejorar la piel con seguridad clínica y un plan realista.
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.1 }}>
              {['Diagnóstico médico', 'Técnica conservadora', 'Seguimiento clínico'].map((item, index, array) => (
                <Box
                  component="span"
                  key={item}
                  sx={(theme) => ({
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: '0.85rem',
                    color: theme.palette.brand.gray,
                    fontWeight: 500,
                    lineHeight: 1.3,
                    letterSpacing: '0.02em',
                  })}
                >
                  {item}
                  {index < array.length - 1 && (
                    <Box
                      component="span"
                      sx={(theme) => ({
                        mx: 0.8,
                        opacity: 0.5,
                      })}
                    >
                      ·
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.6 }}>
              <ActionLink href="/contacto" label="Reservar consulta de evaluación" variant="primary" />
              <ActionLink href="/tratamientos" label="Ver tratamientos" variant="secondary" />
            </Box>
          </Box>
        </Reveal>

        <Reveal delay={0.08}>
          <Box sx={{ gridColumn: { lg: 'span 5' }, position: 'relative' }}>
            <Box
              component="img"
              src="/paty01.webp"
              alt="Retrato de la Dra. Patricia Corvera"
              sx={(theme) => ({
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                border: `1px solid ${theme.palette.brand.beige}`,
                backgroundColor: theme.palette.background.paper,
                boxShadow: `0 24px 46px ${alpha(theme.palette.brand.petroleum, 0.16)}`,
              })}
            />
            <Box
              sx={(theme) => ({
                position: { xs: 'static', md: 'absolute' },
                left: { md: 18 },
                bottom: { md: 18 },
                mt: { xs: 2, md: 0 },
                p: { xs: 2.4, md: 2.8 },
                maxWidth: 310,
                borderRadius: 1.5,
                border: 1,
                borderColor: 'brand.beige',
                backgroundColor: 'background.paper',
                display: 'grid',
                gap: 0.7,
                boxShadow: `0 14px 28px ${alpha(theme.palette.brand.petroleum, 0.13)}`,
              })}
            >
              <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.rose', fontWeight: 500 }}>
                Primera consulta
              </Box>
              <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.text' }}>
                Evaluación clínica, objetivos realistas y plan de tratamiento personalizado.
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Box>
    </SectionBlock>
  );
}
