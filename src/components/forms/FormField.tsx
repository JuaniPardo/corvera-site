'use client';

import { Box } from '@mui/system';

export default function FormField({
  label,
  name,
  multiline = false,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  multiline?: boolean;
  type?: string;
  required?: boolean;
}) {
  return (
    <Box sx={{ display: 'grid', gap: 1.25 }}>
      <Box
        component="label"
        htmlFor={name}
        sx={(theme) => ({
          color: theme.palette.brand.text,
          fontSize: '0.95rem',
          fontWeight: 500,
        })}
      >
        {label}
      </Box>

      {multiline ? (
        <Box
          component="textarea"
          id={name}
          name={name}
          rows={5}
          required={required}
          sx={(theme) => ({
            width: '100%',
            borderRadius: 1.25,
            border: `1px solid ${theme.palette.brand.beige}`,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.brand.text,
            px: 2,
            py: 1.75,
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '1rem',
            resize: 'vertical',
            outline: 'none',
            transition: 'border-color 320ms ease, box-shadow 320ms ease',
            '&:focus-visible': {
              borderColor: theme.palette.brand.rose,
              boxShadow: `0 0 0 3px ${theme.palette.brand.nude}`,
            },
          })}
        />
      ) : (
        <Box
          component="input"
          id={name}
          name={name}
          type={type}
          required={required}
          sx={(theme) => ({
            width: '100%',
            minHeight: 46,
            borderRadius: 1.25,
            border: `1px solid ${theme.palette.brand.beige}`,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.brand.text,
            px: 2,
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 320ms ease, box-shadow 320ms ease',
            '&:focus-visible': {
              borderColor: theme.palette.brand.rose,
              boxShadow: `0 0 0 3px ${theme.palette.brand.nude}`,
            },
          })}
        />
      )}
    </Box>
  );
}
