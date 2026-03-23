'use client';

import { Box } from '@mui/system';

export default function SectionBlock({
  id,
  children,
  background = 'transparent',
  size = 'default',
}: {
  id?: string;
  children: React.ReactNode;
  background?: string;
  size?: 'default' | 'compact' | 'tight';
}) {
  const sectionPadding = {
    default: { xs: 10, md: 14, lg: 16 },
    compact: { xs: 8, md: 10, lg: 11 },
    tight: { xs: 6, md: 8, lg: 9 },
  } as const;

  return (
    <Box component="section" id={id} sx={{ backgroundColor: background }}>
      <Box
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: 1200,
          px: { xs: 3, sm: 4, md: 6 },
          py: sectionPadding[size],
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
