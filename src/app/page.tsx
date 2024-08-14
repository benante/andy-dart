import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic_1_background from '../../public/pic_1_background.jpg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image
        src={pic_1_background}
        alt="background"
        style={{ height: '100vh', width: '100%' }}
        className="object-cover sm:object-none"
      ></Image>
    </main>
  );
}
