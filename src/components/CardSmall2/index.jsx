import React from "react";
import "./index.css";

export default function CardSmall2({ title, genre, tahun, img, judul, episode, onClick }) {
  return (
    <div className="card2" onClick={onClick}>
      <img src={img} alt="" className="photo2" />
      <div className="description2">
        <div>
          <p id="title">{title}</p>
          <p id="judul">{judul}</p>
          <p id="genre">Genre : {genre}</p>
          <p id="tahun">Tahun : {tahun}</p>
          <p id="episode">Episode : {episode}</p>
        </div>
      </div>
    </div>
  );
}
