import { useState } from "react";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function News({ title, content, picture }) {
  return (
    <div className="w-1/4 m-4 ">
      <Card className="shadow-lg">
        <Card.Img variant="top" src={picture} />
        <Card.Body className="bg-mainbg rounded-b-md text-white">
          <Card.Title>
            <strong>{title}</strong>
          </Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
