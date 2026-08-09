import type { Metadata } from 'next';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-editorial',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

/** Production domain — kept in env for preview/staging overrides */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thecoldshift.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The Cold Shift: A Category Guide to Controlled Cold',
    template: '%s | The Cold Shift',
  },
  description:
    'Controlled cold is cold exposure defined by method, conditions, duration, and exit. The Cold Shift explores how cold is delivered, how the body detects it, what research supports, and what remains untested.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'The Cold Shift',
    title: 'The Cold Shift: A Category Guide to Controlled Cold',
    description:
      'Controlled cold is cold exposure defined by method, conditions, duration, and exit. The Cold Shift explores how cold is delivered, how the body detects it, what research supports, and what remains untested.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Cold Shift',
    description:
      'Controlled cold is cold exposure defined by method, conditions, duration, and exit. The Cold Shift explores how cold is delivered, how the body detects it, what research supports, and what remains untested.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${SITE_URL}/#organization`,
                  name: 'BHVD Inc.',
                  url: SITE_URL,
                  description: 'Publisher of The Cold Shift, a category guide to controlled cold exposure.',
                },
                {
                  '@type': 'WebSite',
                  '@id': `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: 'The Cold Shift',
                  description: 'A category guide to controlled cold exposure — how cold is delivered, how the body detects it, what research supports, and what remains untested.',
                  publisher: { '@id': `${SITE_URL}/#organization` },
                  inLanguage: 'en-US',
                },
                {
                  '@type': 'WebPage',
                  '@id': `${SITE_URL}/#webpage`,
                  url: SITE_URL,
                  name: 'The Cold Shift: A Category Guide to Controlled Cold',
                  isPartOf: { '@id': `${SITE_URL}/#website` },
                  about: [
                    { '@type': 'Thing', name: 'Cold exposure' },
                    { '@type': 'Thing', name: 'Cryotherapy' },
                    { '@type': 'Thing', name: 'Cold water immersion' },
                    { '@type': 'Thing', name: 'Thermoreception' },
                  ],
                  genre: 'Educational',
                  inLanguage: 'en-US',
                },
              ],
            }),
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
