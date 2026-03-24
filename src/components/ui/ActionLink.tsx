'use client';

import Link from 'next/link';
import { Box } from '@mui/system';
import { alpha } from '@mui/material/styles';

export default function ActionLink({
  href,
  label,
  variant = 'primary',
}: {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
}) {
  return (
    <Box
      component={Link}
      href={href}
      sx={(theme) => ({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: variant === 'primary' ? 54 : 48,
        px: variant === 'primary' ? 4 : 3.5,
        borderRadius: 1.25,
        border: variant === 'primary' ? '1px solid transparent' : `1px solid ${theme.palette.brand.beige}`,
        backgroundColor:
          variant === 'primary' ? theme.palette.brand.petroleum : theme.palette.background.paper,
        color: variant === 'primary' ? '#FFFFFF' : theme.palette.brand.brown,
        boxShadow:
          variant === 'primary' ? `0 10px 24px ${alpha(theme.palette.brand.petroleum, 0.24)}` : 'none',
        fontSize: variant === 'primary' ? '0.98rem' : '0.95rem',
        fontWeight: variant === 'primary' ? 600 : 500,
        lineHeight: 1,
        transition: 'background-color 260ms ease, color 260ms ease, border-color 260ms ease, transform 220ms ease, box-shadow 260ms ease',
        '&:focus-visible': {
          outline: 'none',
          boxShadow: `0 0 0 3px ${alpha(theme.palette.brand.nude, 0.95)}`,
        },
        '&:hover': {
          backgroundColor:
            variant === 'primary' ? theme.palette.brand.brown : theme.palette.brand.nude,
          borderColor: variant === 'primary' ? 'transparent' : theme.palette.brand.beige,
          transform: 'translateY(-1px)',
          boxShadow:
            variant === 'primary' ? `0 14px 30px ${alpha(theme.palette.brand.petroleum, 0.28)}` : 'none',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      })}
    >
      {label}
    </Box>
  );
}
