'use client';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
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

const deletePainting = (imgFileName: string, id: string) => {
  deleteBucketRow(imgFileName);
  deleteInfo(id);
};

const DeleteDivAdmin: React.FC<DivProps> = ({ art_work }) => {
  return (
    <ListGroup>
      {art_work.map((painting) => (
        <ListGroup.Item
          key={painting.id}
          className="flex-override items-center justify-between "
        >
          <Image
            src={painting.url}
            width={50}
            height={50}
            alt={painting.alt}
            priority={true}
          ></Image>
          <span className="truncate-text">{painting.name}</span>
          <Button
            variant="danger"
            onClick={() => deletePainting(painting.imgFileName, painting.id)}
          >
            Remove
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DeleteDivAdmin;
