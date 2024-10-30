import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mx-2">
      <Image
        src={'/homepage.jpg'}
        alt="background"
        height={600}
        width={600}
        priority={true}
      ></Image>
    </main>
  );
}
