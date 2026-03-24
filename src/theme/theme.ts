import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    brand: {
      brown: string;
      beige: string;
      nude: string;
      petroleum: string;
      rose: string;
      gray: string;
      text: string;
      background: string;
    };
  }

  interface PaletteOptions {
    brand?: {
      brown?: string;
      beige?: string;
      nude?: string;
      petroleum?: string;
      rose?: string;
      gray?: string;
      text?: string;
      background?: string;
    };
  }
}

export const corveraTheme = createTheme({
  spacing: 8,
  palette: {
    mode: 'light',
    primary: {
      main: '#2F4858',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C6707D',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAF8F7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2B2B2B',
      secondary: '#8A7F78',
    },
    brand: {
      brown: '#734E40',
      beige: '#E4BDA4',
      nude: '#FFEEE6',
      petroleum: '#2F4858',
      rose: '#C6707D',
      gray: '#8A7F78',
      text: '#2B2B2B',
      background: '#FAF8F7',
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'var(--font-body), sans-serif',
    h1: {
      fontFamily: 'var(--font-heading), serif',
      fontSize: 'clamp(3rem, 5vw, 4rem)',
      lineHeight: 1.12,
      fontWeight: 500,
      color: '#2B2B2B',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: 'var(--font-heading), serif',
      fontSize: 'clamp(2.1rem, 3.5vw, 3.2rem)',
      lineHeight: 1.18,
      fontWeight: 500,
      color: '#2B2B2B',
      letterSpacing: '-0.015em',
    },
    h3: {
      fontFamily: 'var(--font-heading), serif',
      fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
      lineHeight: 1.25,
      fontWeight: 500,
      color: '#2B2B2B',
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.7,
      color: '#2B2B2B',
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.65,
      color: '#8A7F78',
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textUnderlineOffset: '0.2em',
          transition: 'color 320ms ease',
        },
      },
    },
  },
});
