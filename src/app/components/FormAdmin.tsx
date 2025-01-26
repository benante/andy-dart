'use client';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

function FormAdmin() {
  const form = useRef();

  return (
    <Form ref={form} className="mt-8">
      <Form.Group className="mb-3" controlId="formPaintingName">
        <Form.Label>Painting name</Form.Label>
        <Form.Control type="text" placeholder="Enter painting name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPaintingInfo">
        <Form.Label>Info</Form.Label>
        <Form.Control type="text" placeholder="Info" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Choose file</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button className="bg-green-700" variant="outline-primary" type="submit">
        Upload
      </Button>
    </Form>
  );
}

export default FormAdmin;
