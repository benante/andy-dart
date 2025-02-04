'use client';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
        <ListGroup.Item key={painting.id}>
          <Card style={{ width: 50 }}>
            <Card.Img src={painting.url} />
            <Card.Title>{painting.name}</Card.Title>
          </Card>
          <Button variant="danger">Remove</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DeleteDivAdmin;
