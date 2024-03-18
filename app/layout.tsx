import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import AlertProvider from '@contexts/Alert';
import { AuthProvider } from '@contexts/Auth';
import { authOptions } from '@lib/auth';
import { getServerSession } from 'next-auth';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  initialScale: 1,
  maximumScale: 1,
  width: 'device-width',
};

export const metadata: Metadata = {
  title: 'GemHaus - Find Your Gem',
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/layout/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/layout/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/layout/favicon/favicon-16x16.png',
    },
    {
      rel: 'shortcut icon',
      url: '/layout/favicon/favicon.ico',
    },
  ],
  manifest: '/layout/favicon/site.webmanifest',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body>
        <AuthProvider session={session}>
          <AlertProvider>{children}</AlertProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
