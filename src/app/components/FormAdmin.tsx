'use client';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { uploadStorage, retrieveUrl, uploadInfo } from '@/utils/supabase/db';

function FormAdmin() {
  const form = useRef<HTMLFormElement>(null);
  const [imgUrl, setImgUrl] = useState<string>('');
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState<boolean>(false);

  const uploadPainting = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await uploadStorage(imgFile!);
      const url = await retrieveUrl(imgFile!.name);
      const data = new FormData(form.current!);
      const imgData = {
        name: data.get('name') as string,
        size: data.get('size') as string,
        alt: `${ImageData.name}` as string,
        url: url as string,
        imgFileName: imgFile!.name as string,
      };

      uploadInfo(imgData);
      setUploaded(true);
    } catch {
      console.log('Painting not uploaded');
    }
  };

  const updateImgPreview = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUploaded(false);
    // event.preventDefault();
    const file = event.target.files![0];
    setImgFile(file);
    const fileUrl = URL.createObjectURL(file);
    setImgUrl(fileUrl);
  };

  return (
    <div className="mt-8">
      <h3>Upload</h3>
      <p className="text-red-700 underline font-extrabold">
        Upload jpeg files only
      </p>
      <Form ref={form} onSubmit={uploadPainting}>
        <Form.Group className="mb-3" controlId="formPaintingName">
          <Form.Label>Painting name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Enter painting name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPaintingSize">
          <Form.Label>Size</Form.Label>
          <Form.Control type="text" name="size" placeholder="Ex: 300 x 500cm" />
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
        <Button variant="outline-primary" type="submit">
          Upload
        </Button>
      </Form>
      {uploaded && (
        <Alert className="mt-8" variant="success">
          The painting was successfully uploaded
        </Alert>
      )}
    </div>
  );
}

export default FormAdmin;
