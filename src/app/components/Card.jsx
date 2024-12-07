'use client';
import React from 'react';
import Image from 'next/image';

const Card = ({ img, setIndex }) => {
  return (
    <>
      <div className=" hover:cursor-zoom-in" onClick={() => setIndex(img.id)}>
        <div className="min-w-full h-96 hover:shadow-slate-500 hover:shadow-lg rounded">
          <Image
            className="object-cover h-96"
            priority={true}
            alt={img.alt}
            src={img.url}
            key={img.id}
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="py-2">
          <span className="text-lg text-gray-600">{img.name}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
