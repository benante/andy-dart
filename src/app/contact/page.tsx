import React from 'react';
import FormForMessage from '../components/Form';

const Contact = () => {
  return (
    // width of form is applied on parent container
    <div className="max-w-screen-sm p-4">
      <FormForMessage></FormForMessage>
    </div>
  );
};

export default Contact;
