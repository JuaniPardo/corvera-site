'use client';


import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/system';
import { useState } from 'react';
import { corveraTheme } from './theme';

type RegistryState = {
  cache: ReturnType<typeof createCache>;
  flush: () => string[];
};

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ cache, flush }] = useState<RegistryState>(() => {
    const cache = createCache({ key: 'corvera' });
    cache.compat = true;

    const inserted: string[] = [];
    const previousInsert = cache.insert;

    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return previousInsert(...args);
    };

    return {
      cache,
      flush: () => {
        const names = inserted.splice(0, inserted.length);
        return names;
      },
    };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (!names.length) {
      return null;
    }

    let styles = '';
    names.forEach((name) => {
      const style = cache.inserted[name];
      if (typeof style === 'string') {
        styles += style;
      }
    });

    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={corveraTheme}>
        <GlobalStyles
          styles={(theme) => ({
            ':root': {
              colorScheme: 'light',
            },
            html: {
              backgroundColor: theme.palette.brand.background,
            },
            body: {
              backgroundColor: theme.palette.brand.background,
              color: theme.palette.brand.text,
            },
            '::selection': {
              backgroundColor: theme.palette.brand.beige,
              color: theme.palette.brand.text,
            },
          })}
        />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
