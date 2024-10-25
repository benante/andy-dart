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
        <div className=" min-w-full h-96">
          <Image
            className="object-cover h-96"
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
