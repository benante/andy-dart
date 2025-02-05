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
  {
    /* Giving the showAlert variable only a boolean value would make all the alerts triggered/displayed as soon as a single element gets clicked.
    Instead of creating a component (to be added inside the ListGroup.Item)
    that would handle the state, here I create an object of arrays, which first element is the id and gets a boolean assigned.
    Later in the JSX code if the element(painting)'s id is true the alert gets displayed, otherwise it doesn' t.
    If an alert is open but another item element btn gets clicked, a new object array is created, causing the first alert to disappear  */
  }
  const [showAlert, setShowAlert] = useState<{ [id: string]: boolean }>({});

  const deletePainting = (imgFileName: string, id: string) => {
    deleteBucketRow(imgFileName);
    deleteInfo(id);
    setShowAlert({ [id]: false });
  };

  return (
    <ListGroup>
      {art_work.map((painting) => (
        <ListGroup.Item
          key={painting.id}
          className="flex-override items-center justify-between "
        >
          {showAlert[painting.id] ? (
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
                onClick={() => setShowAlert({ [painting.id]: false })}
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
                onClick={() => setShowAlert({ [painting.id]: true })}
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
