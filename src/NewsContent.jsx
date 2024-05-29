import React from "react";
import { Card } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
export default function NewsContent() {
  const [searchParams] = useSearchParams();

  return (
    <div className="">
      <center>
        <img src={searchParams.get("picture")} alt="" className="w-1/4" />

        <h1>{searchParams.get("title")}</h1>

        <p className="w-1/4">{searchParams.get("content")}</p>
      </center>
    </div>
  );
}
