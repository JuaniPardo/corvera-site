export const typeStyles = {
  h1: {
    fontFamily: 'var(--font-heading), serif',
    fontSize: 'clamp(2.05rem, 4.2vw, 3.75rem)',
    lineHeight: 1.16,
    fontWeight: 500,
    color: 'text.primary',
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: 'var(--font-heading), serif',
    fontSize: 'clamp(1.72rem, 2.85vw, 2.9rem)',
    lineHeight: 1.2,
    fontWeight: 500,
    color: 'text.primary',
    letterSpacing: '-0.015em',
  },
  h3: {
    fontFamily: 'var(--font-heading), serif',
    fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
    lineHeight: 1.25,
    fontWeight: 500,
    color: 'text.primary',
  },
  body1: {
    fontFamily: 'var(--font-body), sans-serif',
    fontSize: '1.05rem',
    lineHeight: 1.7,
    color: 'text.primary',
  },
  body2: {
    fontFamily: 'var(--font-body), sans-serif',
    fontSize: '0.98rem',
    lineHeight: 1.72,
    color: 'text.secondary',
  },
} as const;
