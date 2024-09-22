import React from 'react';
import imglist from '../../../public/gallery/imglist';
import Image from 'next/image';

const Art = () => {
  return (
    <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-1">
      {imglist.map((img) => (
        <Image
          className="w-96 h-96 object-cover"
          alt={img.alt}
          src={img.src}
          key={img.id}
        ></Image>
      ))}
    </div>
  );
};

export default Art;
