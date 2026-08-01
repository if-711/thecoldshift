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

export const metadata: Metadata = {
  metadataBase: new URL('https://thecoldshift.com'),
  title: {
    default: 'The Cold Shift — A Field Guide to Controlled Cold',
    template: '%s | The Cold Shift',
  },
  description:
    'A field guide to controlled cold, sensory awareness, and deliberate state practice. Cold is the input. The shift is the practice.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thecoldshift.com',
    siteName: 'The Cold Shift',
    title: 'The Cold Shift — A Field Guide to Controlled Cold',
    description:
      'A field guide to controlled cold, sensory awareness, and deliberate state practice.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Cold Shift',
    description:
      'A field guide to controlled cold, sensory awareness, and deliberate state practice.',
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
        <a href="#main-content" className="sr-only" style={{ position: 'absolute', top: 0 }}>
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
