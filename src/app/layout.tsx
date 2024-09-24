import { Metadata } from 'next';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import Layout from 'components/layout';
import { Roboto, Playfair_Display } from 'next/font/google';
import 'styles/globals.css';
import 'animate.css';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900']
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: '99LL Limited',
  description: '99LL Limited',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.className} ${playfair.className} bg-primary text-primary`}
    >
      <body>
        <Navbar />
        <main>
          <Layout>{children}</Layout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
