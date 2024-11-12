'use client';
import { useState } from 'react';
import React from 'react';
import imglist from '../../../public/gallery/imglist';
import Card from '../components/Card';
import Slider from '../components/Carousel';

// Create variables to identify index.
// that gets clicked on the card element, which will pass the index to the slider element.
// once slider closes reset index
// toggle CARD / Slider

const Gallery = () => {
  const [index, setIndex] = useState(null);
  console.log(index);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  //   console.log(index);
  // };
  return (
    <main className="grid justify-items-center h-full">
      {index === null ? (
        <div className="grid sm:w-11/12 lg:w-4/5 gap-2 mx-2 justify-items-center grid-cols-1 lg:px-4 md:grid-cols-2 lg:grid-cols-3 ">
          {imglist.map((img) => (
            <Card img={img} setIndex={setIndex} key={img.id}></Card>
          ))}
        </div>
      ) : (
        <Slider currentIndex={index}></Slider>
      )}
    </main>
  );
};

export default Gallery;
