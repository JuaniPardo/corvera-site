'use client';

import Link from 'next/link';
import { Box } from '@mui/system';

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
        minHeight: 48,
        px: 3.5,
        borderRadius: 1.25,
        border: variant === 'primary' ? '1px solid transparent' : `1px solid ${theme.palette.brand.gray}`,
        backgroundColor:
          variant === 'primary' ? theme.palette.brand.brown : theme.palette.background.paper,
        color: variant === 'primary' ? theme.palette.primary.contrastText : theme.palette.brand.text,
        fontSize: '0.95rem',
        fontWeight: 500,
        lineHeight: 1,
        transition: 'background-color 340ms ease, color 340ms ease, border-color 340ms ease',
        '&:hover': {
          backgroundColor:
            variant === 'primary' ? theme.palette.brand.rose : theme.palette.brand.nude,
          borderColor: variant === 'primary' ? 'transparent' : theme.palette.brand.beige,
        },
      })}
    >
      {label}
    </Box>
  );
}
