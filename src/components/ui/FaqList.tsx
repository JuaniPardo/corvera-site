'use client';

import { Box } from '@mui/system';

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      {items.map((item) => (
        <Box
          component="details"
          key={item.question}
          sx={(theme) => ({
            border: `1px solid ${theme.palette.brand.beige}`,
            borderRadius: 1.5,
            p: 0,
            backgroundColor: theme.palette.background.paper,
            overflow: 'hidden',
            '&[open]': {
              borderColor: theme.palette.brand.rose,
            },
            '& > summary': {
              listStyle: 'none',
              cursor: 'pointer',
              px: { xs: 3, md: 4 },
              py: 2.75,
              fontFamily: 'var(--font-heading), serif',
              fontSize: '1.25rem',
              color: theme.palette.brand.text,
              transition: 'background-color 320ms ease',
            },
            '& > summary::-webkit-details-marker': {
              display: 'none',
            },
            '& > summary:hover': {
              backgroundColor: theme.palette.brand.nude,
            },
          })}
        >
          <summary>{item.question}</summary>
          <Box
            sx={(theme) => ({
              px: { xs: 3, md: 4 },
              pb: 3,
              color: theme.palette.brand.gray,
              fontSize: '1rem',
              lineHeight: 1.75,
            })}
          >
            {item.answer}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
