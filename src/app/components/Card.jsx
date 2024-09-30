'use client';
import React from 'react';
import Image from 'next/image';

const Card = ({ img }) => {
  const showDetails = () => {
    console.log(img);
  };

  return (
    <Image
      onMouseEnter={showDetails}
      className="w-96 h-96 object-cover"
      alt={img.alt}
      src={img.src}
      key={img.id}
    ></Image>
  );
};

export default Card;
