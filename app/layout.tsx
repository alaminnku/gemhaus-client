import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import AlertProvider from '@contexts/Alert';
import SessionProvider from '@contexts/Auth';
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
        <SessionProvider session={session}>
          <AlertProvider>{children}</AlertProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
