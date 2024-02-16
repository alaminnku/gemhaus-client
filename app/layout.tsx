import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import AlertProvider from 'contexts/Alert';

export const metadata: Metadata = {
  title: 'GemHaus - Find Your Gem',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <AlertProvider>{children}</AlertProvider>
      </body>
    </html>
  );
}
