'use client';

import { Box } from '@mui/system';

const paths = {
  focus: (
    <path
      d="M4 4h6M14 4h6M4 20h6M14 20h6M4 4v6M20 4v6M4 14v6M20 14v6M12 8a4 4 0 100 8 4 4 0 000-8z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  ),
  leaf: (
    <path
      d="M19 5c-6 0-11 2.5-13 9 3.8 2.5 9.5 1.7 12.5-1.8C21 9.7 21 6 19 5zM8 14c1.2 1.2 2 3 2 5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  ),
  path: (
    <path
      d="M4 6h6a3 3 0 010 6H8a3 3 0 100 6h8a3 3 0 000-6h-2a3 3 0 110-6h6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  ),
  home: (
    <path
      d="M4 11l8-6 8 6v8a1 1 0 01-1 1h-4v-5H9v5H5a1 1 0 01-1-1v-8z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  ),
};

export default function LineIcon({
  name,
}: {
  name: keyof typeof paths;
}) {
  return (
    <Box
      component="span"
      sx={(theme) => ({
        display: 'inline-flex',
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.brand.brown,
        border: `1px solid ${theme.palette.brand.beige}`,
        borderRadius: 1.25,
        backgroundColor: theme.palette.background.paper,
      })}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        {paths[name]}
      </svg>
    </Box>
  );
}
