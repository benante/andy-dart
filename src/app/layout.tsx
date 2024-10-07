import type { Metadata } from 'next';
import { Inter, Montserrat, Roboto, Ubuntu } from 'next/font/google';
import './globals.css';
import NavigationBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Move this import here

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
    <html lang="en">
      <body className={`${montserrat.className} `}>
        <NavigationBar></NavigationBar>
        {children}
      </body>
    </html>
  );
}
