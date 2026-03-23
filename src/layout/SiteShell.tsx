'use client';

import { Box } from '@mui/system';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <MainHeader />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      <MainFooter />
    </Box>
  );
}
