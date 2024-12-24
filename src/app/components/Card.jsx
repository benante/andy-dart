'use client';
import React from 'react';
import Image from 'next/image';

const Card = ({ img, setIndex }) => {
  return (
    <>
      <div
        className=" mb-2 hover:cursor-zoom-in"
        onClick={() => setIndex(img.id)}
      >
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
        <div className="py-3">
          <span
            className="block 
          tracking-widest
          text-center text-gray-600 text-sm "
          >
            {img.name}
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
