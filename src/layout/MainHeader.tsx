'use client';

import Link from 'next/link';
import { Box } from '@mui/system';
import { useState } from 'react';
import { navLinks } from '@/data/siteContent';
import { SITE_CONFIG } from '@/config/site';

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      component="header"
      sx={(theme) => ({
        borderBottom: `1px solid ${theme.palette.brand.beige}`,
        backgroundColor: theme.palette.background.paper,
      })}
    >
      <Box
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: 1200,
          px: { xs: 3, sm: 4, md: 6 },
          py: { xs: 1.75, md: 2.5 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      >
        <Box
          component={Link}
          href="/"
          sx={(theme) => ({
            fontFamily: 'var(--font-heading), serif',
            fontSize: { xs: '1.08rem', md: '1.2rem' },
            color: theme.palette.brand.text,
            letterSpacing: '0.01em',
          })}
        >
          {SITE_CONFIG.name}
        </Box>

        <Box
          component="button"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-site-nav"
          sx={{
            display: { xs: 'inline-flex', md: 'none' },
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 36,
            px: 1.5,
            borderRadius: 1,
            border: '1px solid',
            borderColor: 'brand.beige',
            backgroundColor: 'background.paper',
            color: 'brand.text',
            fontSize: '0.84rem',
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Menu
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 2.5,
            flexWrap: 'wrap',
          }}
        >
          {navLinks.map((link) => (
            <Box
              key={link.href}
              component={Link}
              href={link.href}
              sx={(theme) => ({
                fontSize: '0.95rem',
                color: theme.palette.brand.gray,
                transition: 'color 300ms ease',
                '&:hover': {
                  color: theme.palette.brand.brown,
                },
              })}
            >
              {link.label}
            </Box>
          ))}
        </Box>

        <Box
          id="mobile-site-nav"
          sx={{
            display: { xs: menuOpen ? 'grid' : 'none', md: 'none' },
            width: '100%',
            gap: 0.5,
            pt: 1.5,
            mt: -0.25,
            borderTop: '1px solid',
            borderColor: 'brand.beige',
          }}
        >
          {navLinks.map((link) => (
            <Box
              key={`mobile-${link.href}`}
              component={Link}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              sx={{
                py: 1.1,
                color: 'brand.gray',
                fontSize: '0.95rem',
              }}
            >
              {link.label}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
