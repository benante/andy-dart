import Footer from '../components/Footer';
import NavigationBar from '../components/Navbar';
import '../globals.css';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen flex flex-col bg_main_color">
      <NavigationBar></NavigationBar>
      {children}
      <Footer></Footer>
    </section>
  );
}
