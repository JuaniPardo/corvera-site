import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import SiteShell from '@/layout/SiteShell';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { SITE_CONFIG } from '@/config/site';
import './globals.css';

const bodyFont = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const headingFont = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Medicina Estética`,
  description:
    `Sitio oficial de ${SITE_CONFIG.name}: medicina estética con criterio médico, resultados naturales y seguimiento profesional.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <ThemeRegistry>
          <SiteShell>{children}</SiteShell>
        </ThemeRegistry>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
