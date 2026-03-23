'use client';

import { typeStyles } from '@/theme/typeStyles';
import { Box } from '@mui/system';
import SectionBlock from '@/components/ui/SectionBlock';
import Reveal from '@/components/ui/Reveal';

export default function PageHeading({
  title,
  description,
  compact = false,
}: {
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <SectionBlock size={compact ? 'compact' : 'default'}>
      <Reveal>
        <Box sx={{ maxWidth: 760, display: 'grid', gap: compact ? 2 : 3 }}>
          <Box component="h1" sx={typeStyles.h1}>
            {title}
          </Box>
          <Box
            component="p"
            sx={(theme) => ({
              ...(typeStyles.body1),
              color: theme.palette.brand.gray,
              maxWidth: compact ? 640 : 700,
            })}
          >
            {description}
          </Box>
        </Box>
      </Reveal>
    </SectionBlock>
  );
}
