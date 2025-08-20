import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/app-layout/Footer';
import Header from '@/components/app-layout/Header';

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ContentFix – Paste Your Content & Generate Instantly',
  description:
    'ContentFix makes it easy to transform your text into tweets, LinkedIn posts, newsletters, and more—no signup required.',
  keywords: [
    'content conversion',
    'AI content generator',
    'paste and generate',
    'marketing content',
    'social media posts',
    'newsletter tool',
    'ContentFix',
  ],
  metadataBase: new URL('https://contentfix-landing.vercel.app/'),

  openGraph: {
    title: 'ContentFix – Instant Content Transformation',
    description:
      'Paste any text and let ContentFix instantly reformat it into your chosen format: tweets, LinkedIn posts, newsletters, and beyond.',
    url: 'https://contentfix-landing.vercel.app/',
    siteName: 'ContentFix',
    images: [
      {
        url: 'https://t4.ftcdn.net/jpg/05/34/12/71/360_F_534127141_WLe9sk0MTVS5PxsB3yROZ3lItE4evzr7.jpg',
        width: 1200,
        height: 630,
        alt: 'ContentFix – Paste & Generate Demo',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ContentFix – Paste Your Content & Generate Instantly',
    description:
      'No more writer’s block. Paste your text in ContentFix and choose your format—tweets, LinkedIn posts, newsletters, and more.',
    images: ['https://t4.ftcdn.net/jpg/05/34/12/71/360_F_534127141_WLe9sk0MTVS5PxsB3yROZ3lItE4evzr7.jpg'],
    creator: '@arinze', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
