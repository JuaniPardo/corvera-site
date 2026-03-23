import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import SiteShell from '@/layout/SiteShell';
import ThemeRegistry from '@/theme/ThemeRegistry';
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
  title: 'Dra. Patricia Corvera | Medicina Estética',
  description:
    'Sitio oficial de la Dra. Patricia Corvera: medicina estética con criterio médico, resultados naturales y seguimiento profesional.',
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
      </body>
    </html>
  );
}
