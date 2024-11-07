'use client';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import paintingsImgs from '../../../public/gallery/imglist';

function DarkVariantExample() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <main>
      <Carousel
        indicators={false}
        slide={false}
        interval={null}
        data-bs-theme="dark"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {paintingsImgs.map((img) => (
          <Carousel.Item key={img.id}>
            <Image
              priority={true}
              className="w-3/4 mx-auto my-0" //width 75% to leave narrows outside img, margings to center img
              src={img.src}
              alt={img.alt}
              width={500}
              height={500}
            />
            <Carousel.Caption className="text-white font-semibold ">
              <h5>{img.title}</h5>
              <p>{img.size}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </main>
  );
}

export default DarkVariantExample;
