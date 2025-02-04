'use client';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';

type Painting = {
  id: string;
  url: string;
  alt: string;
  name: string;
  size: string;
};

type DivProps = {
  art_work: Painting[];
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

          <Button variant="danger">Remove</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DeleteDivAdmin;
