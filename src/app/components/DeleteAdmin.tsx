'use client';
import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Image from 'next/image';
import { deleteBucketRow, deleteInfo } from '@/utils/supabase/db';

type Painting = {
  id: string;
  url: string;
  alt: string;
  name: string;
  size: string;
  imgFileName: string;
};

type DivProps = {
  art_work: Painting[];
};

const DeleteDivAdmin: React.FC<DivProps> = ({ art_work }) => {
  // Associate the alert with painting id. If not null alert will be displayed on that specific item only
  const [showAlert, setShowAlert] = useState<string>('');
  const [paintings, setPaintings] = useState<Painting[]>([...art_work]);
  console.log(paintings);

  const deletePainting = (imgFileName: string, id: string) => {
    deleteBucketRow(imgFileName);
    deleteInfo(id);
    setShowAlert('');
    setPaintings(paintings.filter((item) => item.id !== id));
  };

  return (
    <ListGroup>
      {paintings.map((painting) => (
        <ListGroup.Item
          key={painting.id}
          className="flex-override items-center justify-between "
        >
          {showAlert === painting.id ? (
            <Alert className="grow " show={true} variant="warning">
              <p>Are you sure you want to remove this item?</p>
              <Button
                className="mr-2"
                variant="outline-danger"
                onClick={() =>
                  deletePainting(painting.imgFileName, painting.id)
                }
              >
                Yes
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => setShowAlert('')}
              >
                No
              </Button>
            </Alert>
          ) : (
            <>
              <Image
                src={painting.url}
                width={50}
                height={50}
                alt={painting.alt}
                priority={true}
              ></Image>
              <span className="truncate-text">{painting.name}</span>
              <Button
                variant="outline-danger"
                onClick={() => setShowAlert(painting.id)}
              >
                Remove
              </Button>
            </>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DeleteDivAdmin;
