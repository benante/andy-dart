import React from 'react';
import FormForMessage from '../components/Form';
import ContactUs from '../contactUs';

const Contact = () => {
  return (
    // width of form is applied on parent container
    <div className="max-w-screen-sm p-4">
      <ContactUs></ContactUs>
      {/* <FormForMessage></FormForMessage> */}
    </div>
  );
};

export default Contact;
