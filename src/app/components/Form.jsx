'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormMessage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {/* name */}
      <Row className="mb-3 bg-slate-600">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your full name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter your email" />
      </Form.Group>
      {/* message */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your message</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter your full name"
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Button type="submit">Submit message</Button>
    </Form>
  );
}

export default FormMessage;
