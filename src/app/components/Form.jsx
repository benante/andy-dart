'use client';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';
import Spinner from 'react-bootstrap/Spinner';

function FormMessage({ setSendForm }) {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef(); // Reference to the form

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submit behavior

    const formElement = event.currentTarget;

    // If the form is not valid, stop submission
    if (formElement.checkValidity() === false) {
      // event.stopPropagation() stops the event from bubbling up or propagating to parent elements. In a form, for example, this prevents any parent elements from handling the event.
      event.preventDefault();
      event.stopPropagation();
      setValidated(true); // this trigger red highlight if fields are not filled
    } else {
      // Use emailjs to send the form
      setLoading(true);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID, //  EmailJS service ID
          process.env.NEXT_PUBLIC_TEMPLATE_ID, //  EmailJS template ID
          form.current, // Form reference
          process.env.NEXT_PUBLIC_PUBLIC_KEY // public key from EmailJS
        )
        // WHY KEYS ARE PUBLIC
        // Indeed, someone could copy your keys (a well-known issue of any public API), but they will only be able to send your templates with your content, and they will not be able to send a custom email with their content (spam), which is not interesting for spammers. A better way to think of EmailJS in terms of security is not as a service that allows you to send emails from your code, but rather as a service that allows you to create a predefined set of emails via the dashboard, and then just trigger the emails from the code. This is quite similar to how emails are usually sent via a proprietary server code and how products like Intercom or customer.io are working.
        .then(
          () => {
            console.log('Email successfully sent!');
            // form.current.reset(); // Reset form fields after submission
          },
          (error) => {
            console.log('Failed to send email...', error.text);
          }
        );
      setTimeout(() => setSendForm(true), 2000);
    }
  };

  return (
    <Form ref={form} noValidate validated={validated} onSubmit={handleSubmit}>
      {/* name */}
      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Your name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter your full name"
          name="user_name" // Matching the name attribute for emailjs
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      {/* email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your email address</Form.Label>
        <Form.Control
          required
          type="email"
          name="user_email" // Matching the name attribute for emailjs
          placeholder="Enter your email"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>
      {/* message */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your message</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={3}
          name="message" // Matching the name attribute for emailjs
          placeholder="Enter your message"
        />
        <Form.Control.Feedback type="invalid">
          Please enter a message.
        </Form.Control.Feedback>
      </Form.Group>
      {loading ? (
        <Button variant="primary" type="submit">
          <Spinner
            className="mr-2"
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      ) : (
        <Button type="submit">Submit message</Button>
      )}
    </Form>
  );
}

export default FormMessage;
