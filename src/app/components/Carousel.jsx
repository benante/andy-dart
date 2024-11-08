'use client';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import paintingsImgs from '../../../public/gallery/imglist';

function DarkVariantExample() {
  const current = 5;

  // create a new copy of the array, whose initial element start with the selected one.
  let newArrayImg = paintingsImgs.slice(current);
  // Then push the elements that come before the selected one at the end of the new array
  newArrayImg.push(paintingsImgs.slice(0, current)[0]);

  return (
    <div>
      <Carousel
        indicators={false}
        slide={false}
        interval={null}
        data-bs-theme="dark"
      >
        {newArrayImg.map((img) => (
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
    </div>
  );
}

export default DarkVariantExample;
