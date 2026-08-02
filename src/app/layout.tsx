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

/** Use Firebase Hosting address until custom domain is connected */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://the-cold-shift.web.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The Cold Shift — A Field Guide to Controlled Cold',
    template: '%s | The Cold Shift',
  },
  description:
    'A field guide to controlled cold. How cold is delivered, how it is sensed, what the evidence supports, and what remains untested.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'The Cold Shift',
    title: 'The Cold Shift — A Field Guide to Controlled Cold',
    description:
      'A field guide to controlled cold. How cold is delivered, how it is sensed, what the evidence supports, and what remains untested.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Cold Shift',
    description:
      'A field guide to controlled cold. How cold is delivered, how it is sensed, what the evidence supports, and what remains untested.',
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
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
