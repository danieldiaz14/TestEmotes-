import React, { useState, useRef } from "react";

const ImageCard = (props) => {
  const { src, details } = props;
  const { company, size, type } = details;

  return (
    <div className="card">
      <div className="card-body">
        <div className="container-fluid" style={{ height: "48px" }}>
          <img
            style={{
              height: `${size}px`,
              width: `${size}px`,
            }}
            alt={company}
            src={src}
          />
        </div>
        <hr />
        <h5 className="card-title">{company}</h5>
        <p className="card-text">
          How this {type} will look with {size}px
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
