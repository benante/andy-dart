'use client';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { uploadStorage, retrieveUrl } from '@/utils/supabase/db';

function FormAdmin() {
  const form = useRef<HTMLFormElement>(null);
  const [imgUrl, setImgUrl] = useState<string>('');
  const [imgFile, setImgFile] = useState<File | null>(null);

  const addPainting = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await uploadStorage(imgFile!);
    const url = await retrieveUrl(imgFile!.name);
    // const data = new FormData(form.current!);
    // const imgData = {
    //   name: data.get('name') as string,
    //   info: data.get('info') as string,
    //   img: data.get('file') as string,
    // };

    // console.log(imgFile);
    // console.log(imgData.img);
  };

  const updateImgPreview = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // event.preventDefault();
    const file = event.target.files![0];
    setImgFile(file);
    // console.log(file);
    const fileUrl = URL.createObjectURL(file);
    setImgUrl(fileUrl);
    // console.log(fileUrl);
  };

  return (
    <div className="mt-8">
      <p>Upload jpeg files only</p>
      <Form ref={form} onSubmit={addPainting}>
        <Form.Group className="mb-3" controlId="formPaintingName">
          <Form.Label>Painting name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Enter painting name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPaintingInfo">
          <Form.Label>Info</Form.Label>
          <Form.Control required type="text" name="info" placeholder="Info" />
        </Form.Group>
        {imgUrl && (
          <div>
            <Image
              alt="image preview"
              width={200}
              height={200}
              src={imgUrl}
            ></Image>
          </div>
        )}
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Choose file</Form.Label>
          <Form.Control
            onChange={updateImgPreview}
            required
            name="file"
            type="file"
          />
        </Form.Group>
        <Button
          className="bg-green-700"
          variant="outline-primary"
          type="submit"
        >
          Upload
        </Button>
      </Form>
    </div>
  );
}

export default FormAdmin;
