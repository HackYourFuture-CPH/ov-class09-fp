import React, { Component } from "react";

function CardTeaser({ title, data }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{data}</p>
    </div>
  );
}

export default CardTeaser;
