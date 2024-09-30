import React from 'react';
import imglist from '../../../public/gallery/imglist';
import Card from '../components/Card';

const Art = () => {
  return (
    <div className="grid mx-2 justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
      {imglist.map((img) => (
        <Card img={img} key={img.id}></Card>
      ))}
    </div>
  );
};

export default Art;
