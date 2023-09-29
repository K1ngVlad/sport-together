import { StoreProvider } from '@/providers';

import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SportTogether',
  description: 'Двигайся и меняй мир!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="rus">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
