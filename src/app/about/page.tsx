/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <main className="px-3 flex flex-col items-center gap-8 ">
      <Image
        src={'/self_portrait.jpg'}
        width={500}
        height={500}
        alt="self portrait of the artist"
      ></Image>
      <p className="max-w-3xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {/* <Image src={andy} alt="Andy Dart sitting next to his art piece"></Image> */}
    </main>
  );
};

export default About;
