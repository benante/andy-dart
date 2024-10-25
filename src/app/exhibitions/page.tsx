import React from 'react';
import { exhibitions } from '../../../public/exhibitions';
import Image from 'next/image';
import pic from '../../../public/exhibition.jpg';

const Exhibitions = () => {
  const currentDate = new Date();

  return (
    <main className="grid m-3 lg:grid-cols-2 ">
      <div className="flex flex-col justify-center">
        {exhibitions.map((item) =>
          currentDate.getTime() < item.date.getTime() ? (
            <div key={item.venue} className="flex flex-col mb-4 g-3">
              <h1 className="font-semibold">Coming</h1>
              <h3>{item.venue}</h3>
              <span>{item.location}</span>
              {/* Convert the Date object into a string */}
              <span>{item.date.toDateString()}</span>
            </div>
          ) : (
            <div key={item.venue} className="flex flex-col mb-4">
              <h1 className="line-through font-semibold">Past</h1>
              <h3>{item.venue}</h3>
              <span>{item.location}</span>
              {/* Convert the Date object into a string */}
              <span>{item.date.toDateString()}</span>
            </div>
          )
        )}
      </div>
      <div>
        <Image priority={true} alt="exhibition image" src={pic}></Image>
      </div>
    </main>
  );
};

export default Exhibitions;
//
