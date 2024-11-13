'use client';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import paintingsImgs from '../../../public/gallery/imglist';
import CloseBtn from '../components/CloseBtn';

function DarkVariantExample({ currentIndex }) {
  let copyArrayImg;
  if (currentIndex === 0) {
    copyArrayImg = paintingsImgs;
  } else {
    // create a new copy of the array, whose initial element start with the selected one.
    copyArrayImg = paintingsImgs.slice(currentIndex);
    // Then push the elements that come before the selected one at the end of the new array
    copyArrayImg.push(paintingsImgs.slice(0, currentIndex)[0]);
  }

  return (
    <div className="flex flex-col items-center gap-10 mx-2">
      <Carousel
        indicators={false}
        slide={false}
        interval={null}
        data-bs-theme="dark"
      >
        {copyArrayImg.map((img) => (
          <Carousel.Item key={img.id}>
            <Image
              priority={true}
              className=" " //width 75% to leave arrows outside img, margings to center img
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
      <CloseBtn></CloseBtn>
    </div>
  );
}

export default DarkVariantExample;
