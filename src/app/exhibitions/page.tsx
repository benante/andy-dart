import React from 'react';
import { exhibitions } from '../../../public/exhibitions';

const Exhibitions = () => {
  const currentDate = new Date();

  return (
    <div className="mx-8">
      {exhibitions.map((item) =>
        currentDate.getTime() < item.date.getTime() ? (
          <div key={item.venue} className="flex flex-col">
            <h1>FUTURE</h1>
            <h3>{item.venue}</h3>
            <span>{item.location}</span>
            {/* Convert the Date object into a string */}
            <span>{item.date.toDateString()}</span>
          </div>
        ) : (
          <div key={item.venue} className="flex flex-col">
            <h1>PAST</h1>
            <h3>{item.venue}</h3>
            <span>{item.location}</span>
            {/* Convert the Date object into a string */}
            <span>{item.date.toDateString()}</span>
          </div>
        )
      )}
    </div>
  );
};

export default Exhibitions;
//
