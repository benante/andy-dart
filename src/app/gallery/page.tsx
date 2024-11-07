import React from 'react';
import imglist from '../../../public/gallery/imglist';
import Card from '../components/Card';
import DarkVariantExample from '../components/Carousel';

const Gallery = () => {
  return (
    <main className="grid justify-items-center ">
      {/* <div className="grid sm:w-11/12 lg:w-4/5 gap-2 mx-2 justify-items-center grid-cols-1 lg:px-4 md:grid-cols-2 lg:grid-cols-3 ">
        {imglist.map((img) => (
          <Card img={img} key={img.id}></Card>
        ))}
      </div> */}
      <DarkVariantExample></DarkVariantExample>
    </main>
  );
};

export default Gallery;
