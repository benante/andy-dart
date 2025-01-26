import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import NavigationBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Move this import here

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Andy Dart',
  description: 'Andy Dart`s official website',
  // When you replace the default Next.js favicon with your custom one, browsers might still use the old cached favicon instead of the new one. Adding a ?v=1 query parameter signals to the browser that this is a "new version" of the file, so it will fetch the updated favicon instead of serving the cached one.
  icons: {
    icon: '/favicon.ico?v=1',
    apple: '/apple-touch-icon.png?v=1',
    shortcut: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg_main_color">{children}</body>
    </html>
  );
}
