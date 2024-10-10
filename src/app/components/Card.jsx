'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const Card = ({ img }) => {
  const [hovered, setHovered] = useState(true);
  const showDetails = () => {
    setHovered(false);
    console.log(hovered);
  };
  const hideDetails = () => {
    setHovered(true);
    console.log(hovered);
  };

  return (
    <>
      <div>
        <Image
          className="w-96 h-96 object-cover z-0"
          alt={img.alt}
          src={img.src}
          key={img.id}
        ></Image>

        <div>
          <span className="text-lg text-gray-600">{img.title}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
