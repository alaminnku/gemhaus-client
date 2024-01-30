import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import Footer from '@components/layout/Footer';
import AlertProvider from 'contexts/Alert';

export const metadata: Metadata = {
  title: 'GemHaus - Find Your Gem',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <AlertProvider>
          {children}
          <Footer />
        </AlertProvider>
      </body>
    </html>
  );
}
