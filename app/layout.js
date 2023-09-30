import { Inter } from 'next/font/google';
import { StoreProvider } from '@/providers';
import Head from 'next/head';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SportTogether',
  description: 'Двигайся и меняй мир!',
  // visualViewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="rus">
      <Head>
        <link rel="icon" href="/icon.ico" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-64x64.png"
          sizes="64x64"
          type="image/png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
