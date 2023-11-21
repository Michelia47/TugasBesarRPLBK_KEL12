import React from "react";
import "./index.css";

export default function CardSmall4({ img, judul, cast }) {
  return (
    <div className="card2">
      <img src={img} alt="" className="photo2" />
      <div className="description2">
        <div>
          <p id="judul">{judul}</p>
          <p id="cast">{cast}</p>
        </div>
      </div>
    </div>
  );
}
