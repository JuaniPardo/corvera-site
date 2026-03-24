'use client';

import { Box } from '@mui/system';
import { alpha } from '@mui/material/styles';

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqList({
  items,
  defaultOpenIndex,
}: {
  items: FaqItem[];
  defaultOpenIndex?: number;
}) {
  return (
    <Box sx={{ display: 'grid', borderTop: 1, borderColor: 'brand.beige' }}>
      {items.map((item, index) => (
        <Box
          component="details"
          key={`${item.question}-${index}`}
          open={defaultOpenIndex === index}
          sx={(theme) => ({
            borderBottom: `1px solid ${theme.palette.brand.beige}`,
            backgroundColor: 'transparent',
            '& > summary': {
              listStyle: 'none',
              cursor: 'pointer',
              px: 0.5,
              py: { xs: 2.2, md: 2.55 },
              fontFamily: 'var(--font-heading), serif',
              fontSize: { xs: '1.18rem', md: '1.24rem' },
              lineHeight: 1.35,
              color: theme.palette.brand.text,
              transition: 'background-color 220ms ease, color 220ms ease, padding-left 220ms ease',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) auto',
              alignItems: 'center',
              gap: 1.5,
            },
            '& > summary::-webkit-details-marker': {
              display: 'none',
            },
            '& > summary::after': {
              content: '"+"',
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '1.5rem',
              fontWeight: 300,
              lineHeight: 1,
              color: theme.palette.brand.gray,
              transition: 'color 220ms ease, transform 220ms ease',
              transform: 'translateY(-1px)',
            },
            '& > summary:hover': {
              backgroundColor: alpha(theme.palette.brand.nude, 0.72),
              paddingLeft: theme.spacing(1.2),
            },
            '&[open] > summary': {
              color: theme.palette.brand.brown,
              backgroundColor: alpha(theme.palette.brand.nude, 0.45),
            },
            '&[open] > summary::after': {
              content: '"−"',
              color: theme.palette.brand.brown,
            },
            '&[open] .faq-answer': {
              animation: 'faqReveal 220ms ease',
            },
            '@keyframes faqReveal': {
              from: {
                opacity: 0,
                transform: 'translateY(-3px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          })}
        >
          <summary>{item.question}</summary>
          <Box
            className="faq-answer"
            sx={(theme) => ({
              px: 0.5,
              pb: { xs: 2.4, md: 2.7 },
              color: theme.palette.brand.gray,
              fontSize: '1rem',
              lineHeight: 1.7,
              maxWidth: 860,
            })}
          >
            {item.answer}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
