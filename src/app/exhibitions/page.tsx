import React from 'react';
import { exhibitions } from '../../../public/exhibitions';
import Image from 'next/image';
import pic from '../../../public/exhibition.jpg';

const Exhibitions = () => {
  const currentDate = new Date();

  return (
    <main className="flex flex-col m-3 items-center (640px):">
      {/* lg:grid-cols-2 lg:temp_col_2_20_80  */}
      <div>
        <Image priority={true} alt="exhibition image" src={pic}></Image>
      </div>
      <div className=" mt-12 ">
        {exhibitions.map((item) =>
          currentDate.getTime() < item.date.getTime() ? (
            <div key={item.venue} className="flex flex-col mb-4 ">
              <h3 className="font-semibold">{item.venue}</h3>
              <span>{item.location}</span>
              {/* Convert the Date object into a string */}
              <span>{item.date.toDateString()}</span>
            </div>
          ) : (
            <div key={item.venue} className="flex flex-col mb-4">
              <h3 className="font-semibold">{item.venue}</h3>
              <span className="line-through">{item.location}</span>
              {/* Convert the Date object into a string */}
              <span className="line-through">{item.date.toDateString()}</span>
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default Exhibitions;
//
