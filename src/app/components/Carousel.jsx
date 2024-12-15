'use client';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import CloseBtn from './CloseBtn';

function Slider({ currentIndex, imgList }) {
  let copyArrayImg;
  if (currentIndex === 0) {
    copyArrayImg = imgList;
  } else {
    // create a new copy of the array, whose initial element start with the selected one.
    copyArrayImg = imgList.slice(currentIndex - 1); // -1 because the imgs in the database start with 1, not 0

    // Then push the elements that come before the selected one at the end of the new array
    copyArrayImg.push(imgList.slice(0, currentIndex)[0]);
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
              src={img.url}
              alt={img.alt}
              width={500}
              height={500}
            />
            <Carousel.Caption className="text-white font-semibold ">
              <h5>{img.name}</h5>
              <p>{img.size}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <CloseBtn></CloseBtn>
    </div>
  );
}

export default Slider;
