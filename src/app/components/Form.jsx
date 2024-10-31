'use client';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';

function FormMessage() {
  const [validated, setValidated] = useState(false);
  const form = useRef(); // Reference to the form

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submit behavior

    const formElement = event.currentTarget;

    // If the form is not valid, stop submission
    if (formElement.checkValidity() === false) {
      // event.stopPropagation() stops the event from bubbling up or propagating to parent elements. In a form, for example, this prevents any parent elements from handling the event.
      event.stopPropagation();

      setValidated(true);
      return;
    }

    // Use emailjs to send the form
    emailjs
      .sendForm(
        'service_72m6uwl', //  EmailJS service ID
        'template_awk483r', //  EmailJS template ID
        form.current, // Form reference
        'ULxEnyWmY68sczEsF' // public key from EmailJS
      )
      .then(
        () => {
          console.log('Email successfully sent!');
          setValidated(false);
          form.current.reset(); // Reset form fields after submission
        },
        (error) => {
          console.log('Failed to send email...', error.text);
        }
      );
  };

  return (
    <div className="min-w-80">
      <h2 className="font-semibold mb-2 ">Contact</h2>
      <p className="mb-4">
        For general enquiries, images of available works, and a price list send
        me a message
      </p>

      <Form ref={form} noValidate validated={validated} onSubmit={handleSubmit}>
        {/* name */}
        <Row className="mb-3">
          <Form.Group md="6" controlId="validationCustom01">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your full name"
              name="user_name" // Matching the name attribute for emailjs
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

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

        <Button className="bg_button" type="submit">
          Submit message
        </Button>
      </Form>
    </div>
  );
}

export default FormMessage;
