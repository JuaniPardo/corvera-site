'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';

export default function InfoCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: { xs: 3, md: 4 },
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.brand.beige}`,
        borderRadius: 1.5,
        boxShadow: '0 8px 24px rgba(115, 78, 64, 0.06)',
        height: '100%',
        transition: 'transform 320ms ease, box-shadow 320ms ease, border-color 320ms ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: theme.palette.brand.rose,
          boxShadow: '0 14px 28px rgba(115, 78, 64, 0.1)',
        },
      })}
    >
      {children}
      <Box component="h3" sx={{ ...typeStyles.h3, fontSize: '1.35rem' }}>
        {title}
      </Box>
      <Box component="p" sx={{ ...typeStyles.body2, color: 'brand.gray' }}>
        {description}
      </Box>
    </Box>
  );
}
