'use client';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import CloseBtn from './CloseBtn';

function Slider({ currentIndex, imgList }) {
  let copyArrayImg;
  if (currentIndex === 0) {
    copyArrayImg = imgList;
  } else {
    // create a new array which starts with the selected painting as first element.
    let firstHalf = imgList.slice(currentIndex);

    // then push the elements that precede the selected one at the end of that array
    let secondHalf = imgList.slice(0, currentIndex);

    copyArrayImg = [...firstHalf, ...secondHalf.flat()];
  }

  return (
    <div className="flex flex-col items-center mx-2">
      <Carousel
        indicators={false}
        slide={false}
        interval={null}
        data-bs-theme="dark"
      >
        {copyArrayImg.map((img, i) => (
          <Carousel.Item key={i}>
            <Image
              priority={true}
              //width 75% to leave arrows outside img, margings to center img
              src={img.url}
              alt={img.alt}
              width={700}
              height={700}
            />
            <Carousel.Caption></Carousel.Caption>
            <div
              className={`py-3 tracking-widest text-sm text-center mb-4 text-gray-600 `}
            >
              <span className="text-lg mb-1 text-black">{img.name}</span>
              <p>{img.size}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <CloseBtn></CloseBtn>
    </div>
  );
}

export default Slider;
