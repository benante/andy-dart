'use client';
import React from 'react';
import Image from 'next/image';

const Card = ({ img }) => {
  let selectIndex = (img) => {
    console.log(img.id);
  };
  return (
    <>
      <div className=" hover:cursor-zoom-in" onClick={() => selectIndex(img)}>
        <div className="min-w-full h-96 hover:shadow-slate-500 hover:shadow-lg rounded">
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
