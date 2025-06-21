import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alex Johnson | Digital Creator & Entrepreneur',
  description: 'Welcome to my digital hub! Explore my latest projects, connect with me on social media, and discover my creative journey as a content creator and entrepreneur.',
  keywords: ['digital creator', 'entrepreneur', 'content creator', 'social media', 'personal brand'],
  authors: [{ name: 'Alex Johnson' }],
  creator: 'Alex Johnson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexjohnson.bio',
    title: 'Alex Johnson | Digital Creator & Entrepreneur',
    description: 'Welcome to my digital hub! Explore my latest projects and connect with me.',
    siteName: 'Alex Johnson Bio',
    images: [
      {
        url: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Alex Johnson - Digital Creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Johnson | Digital Creator & Entrepreneur',
    description: 'Welcome to my digital hub! Explore my latest projects and connect with me.',
    images: ['https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <ThemeToggle />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}