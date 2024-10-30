import Image from 'next/image';
import pic_1_background from '../../public/pic4_blue_yellow_and_rust_on_orange_and_green 1.jpg';

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between mx-2">
      <Image
        src={pic_1_background}
        alt="background"
        height={800}
        // style={{ height: '100vh', width: '100%' }}
        // className="object-cover sm:object-none"
      ></Image>
    </main>
  );
}
