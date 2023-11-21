import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import Navbar from './main/Navbar';

function RekomendasiDrama() {
  return (
    <div className='body2'>
      <div><Navbar></Navbar></div>
      <section>
      <h1>Rekomendasi Drama</h1>
        <div className="card1container">
        <div className="card1 horizontal">
          <Link to="/RekomendasiDrama/Drama" className={location.pathname === '/RekomendasiDrama/Drama' ? 'active' : ''}>
            <img
              src="https://img.freepik.com/premium-vector/streaming-music-video-with-play-button-and-note-of-music-onilne-streaming-white-isolated_138676-571.jpg?w=740"
              alt="Drama"
            />
            <div>Drama</div>
          </Link>
        </div>
        <div className="card1 horizontal">
          <Link to="/RekomendasiDrama/Cast" className={location.pathname === '/RekomendasiDrama/Cast' ? 'active' : ''}>
            <img
              src="https://img.freepik.com/premium-vector/happy-boy-listening-music-waiting-the-bus-with-heaphone-in-halte-vector-icon-iillustration-people-and-music-icon-concept-white-isolated_138676-491.jpg?w=740"
              alt="Cast"
            />
            <div>Cast</div>
          </Link>
        </div>
        <div className="card1 horizontal">
          <Link to="/RekomendasiDrama/Sinopsis" className={location.pathname === '/RekomendasiDrama/Sinopsis' ? 'active' : ''}>
            <img
              src="https://img.freepik.com/premium-vector/note-paper-with-pencil_138676-332.jpg?w=740"
              alt="Sinopsis"
            />
            <div>Sinopsis</div>
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}

export default RekomendasiDrama;