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
    <main className="abolute top-0 left-0 h-screen w-screen">
      {/* Add slide={false} to Carousel? */}
      <Carousel
        interval={null}
        data-bs-theme="dark"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {paintingsImgs.map((img) => (
          <Carousel.Item key={img.id}>
            <Image
              priority={true}
              className=""
              src={img.src}
              alt={img.alt}
              width={500}
              height={500}
            />
            <Carousel.Caption>
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
