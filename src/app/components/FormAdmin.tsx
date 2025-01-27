'use client';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';
import Image from 'next/image';

function FormAdmin() {
  const form = useRef<HTMLFormElement>(null);
  const [imgFile, setImgFile] = useState<string>('');

  const addPainting = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(form.current!);
    const file = {
      name: data.get('name') as string,
      info: data.get('info') as string,
      img: data.get('file'),
    };

    // console.log(imgFile);
    // console.log(file.img);
  };

  const updateImgPreview = (event: React.ChangeEvent<HTMLFormElement>) => {
    // console.log(imgFile);
    // event.preventDefault();
    const file = event.target.files[0];
    console.log(file);
    const fileUrl = URL.createObjectURL(file);
    setImgFile(fileUrl);
    console.log(fileUrl);
  };

  return (
    <Form
      ref={form}
      className="mt-8"
      onSubmit={addPainting}
      onChange={updateImgPreview}
    >
      <Form.Group className="mb-3" controlId="formPaintingName">
        <Form.Label>Painting name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter painting name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPaintingInfo">
        <Form.Label>Info</Form.Label>
        <Form.Control type="text" name="info" placeholder="Info" />
      </Form.Group>
      {imgFile && (
        <div>
          <Image
            alt="image preview"
            width={200}
            height={200}
            src={imgFile}
          ></Image>
        </div>
      )}
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Choose file</Form.Label>
        <Form.Control name="file" type="file" />
      </Form.Group>
      <Button className="bg-green-700" variant="outline-primary" type="submit">
        Upload
      </Button>
    </Form>
  );
}

export default FormAdmin;
