import React from 'react';
import imglist from '../../../public/gallery/imglist';
import Image from 'next/image';

const Art = () => {
  return (
    <div className="">
      {imglist.map((img) => (
        <Image alt={img.alt} src={img.src} key={img.id}></Image>
      ))}
    </div>
  );
};

export default Art;
