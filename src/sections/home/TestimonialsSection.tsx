'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import { alpha } from '@mui/material/styles';
import Reveal from '@/components/ui/Reveal';
import SectionBlock from '@/components/ui/SectionBlock';
import { testimonials } from '@/data/siteContent';

// Genera iniciales del nombre para el avatar fallback
function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  return (
    <SectionBlock size="compact" background="#FAF8F7">
      <Box sx={{ display: 'grid', gap: 5 }}>
        <Reveal>
          <Box sx={{ display: 'grid', gap: 2, textAlign: 'center', maxWidth: 680, mx: 'auto' }}>
            <Box component="h2" sx={typeStyles.h2}>
              Lo que dicen nuestras pacientes
            </Box>
            <Box component="p" sx={{ ...typeStyles.body1, color: 'brand.gray' }}>
              Experiencias reales de quienes confiaron en nuestro enfoque médico.
            </Box>
          </Box>
        </Reveal>

        <Box
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          sx={{ position: 'relative' }}
        >
          <Reveal>
            <Box
              sx={(theme) => ({
                position: 'relative',
                maxWidth: 800,
                mx: 'auto',
                p: { xs: 4, md: 6 },
                borderRadius: 2,
                backgroundColor: 'background.paper',
                border: 1,
                borderColor: 'brand.beige',
                boxShadow: `0 8px 32px ${alpha(theme.palette.brand.petroleum, 0.06)}`,
              })}
            >
              {/* Quote icon */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 16, md: 24 },
                  left: { xs: 20, md: 32 },
                  fontSize: { xs: '3rem', md: '4rem' },
                  fontFamily: 'serif',
                  color: 'brand.beige',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                "
              </Box>

              <Box
                sx={{
                  minHeight: { xs: 200, md: 180 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  pt: { xs: 4, md: 3 },
                }}
              >
                <Box
                  component="blockquote"
                  sx={{
                    ...typeStyles.body1,
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                    fontStyle: 'italic',
                    color: 'brand.text',
                    textAlign: 'center',
                    lineHeight: 1.8,
                    mb: 3,
                    px: { xs: 1, md: 4 },
                  }}
                >
                  {testimonials[activeIndex].quote}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                  {/* Avatar con imagen o iniciales */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      flexShrink: 0,
                      backgroundColor: 'brand.rose',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: 2,
                      borderColor: 'brand.beige',
                    }}
                  >
                    {testimonials[activeIndex].image ? (
                      <Image
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].author}
                        width={56}
                        height={56}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    ) : (
                      <Box
                        component="span"
                        sx={{
                          ...typeStyles.body1,
                          fontWeight: 600,
                          color: 'white',
                          fontSize: '1.1rem',
                        }}
                      >
                        {getInitials(testimonials[activeIndex].author)}
                      </Box>
                    )}
                  </Box>

                  <Box sx={{ textAlign: 'left' }}>
                    <Box
                      component="cite"
                      sx={{
                        ...typeStyles.body2,
                        fontStyle: 'normal',
                        fontWeight: 600,
                        color: 'brand.brown',
                        display: 'block',
                      }}
                    >
                      {testimonials[activeIndex].author}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        ...typeStyles.body2,
                        fontSize: '0.875rem',
                        color: 'brand.rose',
                      }}
                    >
                      {testimonials[activeIndex].treatment}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Reveal>

          {/* Navigation arrows */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mt: 3,
            }}
          >
            <Box
              component="button"
              onClick={prevTestimonial}
              aria-label="Testimonio anterior"
              sx={(theme) => ({
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: 1,
                borderColor: 'brand.beige',
                backgroundColor: 'background.paper',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 200ms ease',
                '&:hover': {
                  borderColor: 'brand.rose',
                  backgroundColor: alpha(theme.palette.brand.rose, 0.05),
                },
              })}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Box>
            <Box
              component="button"
              onClick={nextTestimonial}
              aria-label="Siguiente testimonio"
              sx={(theme) => ({
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: 1,
                borderColor: 'brand.beige',
                backgroundColor: 'background.paper',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 200ms ease',
                '&:hover': {
                  borderColor: 'brand.rose',
                  backgroundColor: alpha(theme.palette.brand.rose, 0.05),
                },
              })}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Box>
          </Box>

          {/* Dots indicator */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              mt: 2.5,
            }}
          >
            {testimonials.map((_, index) => (
              <Box
                key={index}
                component="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver testimonio ${index + 1}`}
                sx={{
                  width: index === activeIndex ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: 'none',
                  backgroundColor: index === activeIndex ? 'brand.rose' : 'brand.beige',
                  cursor: 'pointer',
                  transition: 'all 300ms ease',
                  '&:hover': {
                    backgroundColor: index === activeIndex ? 'brand.rose' : 'brand.brown',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </SectionBlock>
  );
}
