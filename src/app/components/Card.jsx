'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const Card = ({ img }) => {
  // DELETE THIS BIT IF NOT USED

  // const [hovered, setHovered] = useState(true);
  // const showDetails = () => {
  //   setHovered(false);
  //   console.log(hovered);
  // };
  // const hideDetails = () => {
  //   setHovered(true);
  //   console.log(hovered);
  // };

  return (
    <>
      <div>
        <div className="max-h-96 min-w-96 overflow-hidden">
          <Image
            className="object-cover h-screen"
            priority={true}
            alt={img.alt}
            src={img.src}
            key={img.id}
          ></Image>
        </div>
        <div className="py-2">
          <span className="text-lg text-gray-600">{img.title}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
