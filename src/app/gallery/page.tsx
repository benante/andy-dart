'use client';
import { useState, createContext } from 'react';
import React from 'react';
import imglist from '../../../public/gallery/imglist';
import Card from '../components/Card';
import Slider from '../components/Carousel';

type IndexContextType =
  | {
      setIndex: React.Dispatch<React.SetStateAction<number | null>>;
    }
  | undefined;

export const IndexContext = createContext<IndexContextType>(undefined);

const Gallery = () => {
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
          <Slider currentIndex={index}></Slider>
        </IndexContext.Provider>
      )}
    </main>
  );
};

export default Gallery;
