import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
// import Header from '@/components/app-layout/Header';
// import Footer from '@/components/app-layout/Footer';
// import ReduxProvider from '@/redux/ReduxProvider';

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
        url: 'https://contentfix-landing.vercel.app/og-image.png',
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
    images: ['https://contentfix-landing.vercel.app/twitter-card.png'],
    creator: '@your_twitter_handle', // replace with your handle
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {/* <ReduxProvider> */}
          <aside className="fixed top-0 left-0 right-0 text-[12px] md:text-[14px] z-10 flex items-center justify-center gap-3 bg-black p-4 text-mainWhite h-[3rem]">
            <p>Try ContentFix free today—paste your content and hit “Generate”!</p>
            <span className="underline cursor-pointer">Get Started</span>
          </aside>
          {/* <Header /> */}
          {modal}
          {children}
          {/* <Footer /> */}
          <div id="modal-root" />
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
