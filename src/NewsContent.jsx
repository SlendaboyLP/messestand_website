import React from "react";
import { Card } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import NavElement from "./NavElement";

export default function NewsContent() {
  const [searchParams] = useSearchParams();

  return (
    <div className="">
      <NavElement />

      <center>
        <Card className="w-1/2 my-4">
          <Card.Img
            variant="top"
            src={searchParams.get("picture")}
            alt="Image"
          />
          <Card.Body>
            <Card.Title>
              <h1 className="font-extrabold">{searchParams.get("title")}</h1>
            </Card.Title>
            <Card.Text>{searchParams.get("content")}</Card.Text>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
}
