import type { Metadata } from 'next';
import { Inter, Montserrat, Roboto, Ubuntu } from 'next/font/google';
import './globals.css';
import NavigationBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Move this import here
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Andy Dart',
  description: 'Andy Dart`s official website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>
        <NavigationBar></NavigationBar>
        {children}
        <footer className="p-4 mt-auto text-center">
          <a
            className="no-underline text-sm text-gray-400"
            href="https://github.com/benante"
          >
            By Orlandi Tommaso
          </a>
        </footer>
      </body>
    </html>
  );
}
