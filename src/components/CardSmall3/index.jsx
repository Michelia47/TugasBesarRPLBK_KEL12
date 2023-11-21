import React from "react";
import "./index.css";

export default function CardSmall3({ img, judul, sinopsis, quotes, sound }) {
  return (
    <div className="card2">
      <img src={img} alt="" className="photo2" />
      <div className="description2">
        <div>
          <p id="judul">{judul}</p>
          <p id="sinopsis">{sinopsis}</p>
          <p id="quotes">{quotes}</p>
          <p id="sound">{sound}</p>
        </div>
      </div>
    </div>
  );
}
