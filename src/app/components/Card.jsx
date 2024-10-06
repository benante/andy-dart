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
      <div
        onMouseEnter={showDetails}
        onMouseLeave={hideDetails}
        className="relative"
      >
        {!hovered && (
          <div className="z-10 w-full h-full flex items-center justify-center absolute bg-slate-50 opacity-90">
            <span className="text-lg">{img.title}</span>
          </div>
        )}

        <Image
          className="w-96 h-96 object-cover z-0"
          alt={img.alt}
          src={img.src}
          key={img.id}
        ></Image>
      </div>
    </>
  );
};

export default Card;
