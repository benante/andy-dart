import React from 'react';
import { exhibitions } from '../../../public/exhibitions';

const Exhibitions = () => {
  const currentDate = new Date();

  return (
    <div className="mx-8">
      {exhibitions.map((artEvent) => (
        <div key={artEvent.venue} className="flex flex-col ">
          <h3>{artEvent.venue}</h3>
          <span>{artEvent.location}</span>
          {/* Atm dates are Date objects and need to be converted into strings */}
          <span>{artEvent.date.toDateString()}</span>
        </div>
      ))}
    </div>
  );
};

export default Exhibitions;
