'use client';
import React from 'react';
import FormForMessage from '../../components/Form';
import Image from 'next/image';
import { useState } from 'react';

const Contact = () => {
  const [sendForm, setSendForm] = useState(false);

  return (
    <main className="flex flex-wrap sm:justify-center items-end gap-4 p-2 ">
      <Image
        src={'/studio_1.jpg'}
        alt="contact image"
        priority={true}
        width={600}
        height={600}
        style={{ width: 'auto', height: 'auto' }} // to avoid next.js "Image with src  has either width or height modified, but not the other"
      ></Image>
      <div className="">
        <h2 className="text-lg font-semibold mb-2 ">Contact</h2>
        <p className="mb-4">
          For general enquiries, images of available works, and a price list
          send me a message
        </p>
        {!sendForm ? (
          <FormForMessage setSendForm={setSendForm}></FormForMessage>
        ) : (
          // eslint-disable-next-line react/no-unescaped-entities
          <p>Thanks for your message. I' ll reply as soon as I can </p>
        )}
      </div>
    </main>
  );
};

export default Contact;
