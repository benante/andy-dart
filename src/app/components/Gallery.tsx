'use client';
import { useState } from 'react';
import React from 'react';
import Card from './Card';
import Slider from './Carousel';
import { IndexContext } from '../IndexContext';

type Painting = {
  id: string;
  url: string;
  alt: string;
  name: string;
  size: string;
};

type GalleryProps = {
  imglist: Painting[];
};

const Gallery: React.FC<GalleryProps> = ({ imglist }) => {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <main className="grid justify-items-center">
      {index === null ? (
        <div className="grid sm:w-11/12 lg:w-4/5 gap-2 mx-2 justify-items-center grid-cols-1 lg:px-4 md:grid-cols-2 lg:grid-cols-3 ">
          {imglist.map((img) => (
            <Card img={img} setIndex={setIndex} key={img.id}></Card>
          ))}
        </div>
      ) : (
        <IndexContext.Provider value={{ setIndex }}>
          <Slider currentIndex={index} imgList={imglist}></Slider>
        </IndexContext.Provider>
      )}
    </main>
  );
};

export default Gallery;
