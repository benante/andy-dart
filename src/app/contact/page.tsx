import React from 'react';
import FormForMessage from '../components/Form';
import Image from 'next/image';

const Contact = () => {
  return (
    <main className="flex flex-wrap sm:justify-center items-end gap-4 p-2">
      <Image
        src={'/contact.jpg'}
        alt="contact image"
        priority={true}
        width={800}
        height={800}
      ></Image>
      <FormForMessage></FormForMessage>
    </main>
  );
};

export default Contact;
