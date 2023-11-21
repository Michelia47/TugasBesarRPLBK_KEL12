import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import Navbar from './main/Navbar';

function QuotesSoundtrackDrama() {
  return (
    <div className='body2'>
      <div><Navbar></Navbar></div>
      <section>
      <h1>Quotes & Soundtrack Drama</h1>
        <div className="card1container">
        <div className="card1 horizontal">
          <Link to="/QuotesSoundtrackDrama/Quotes" className={location.pathname === '/QuotesSoundtrackDrama/Quotes' ? 'active' : ''}>
            <img
              src="https://img.freepik.com/premium-vector/note-paper-with-pencil_138676-332.jpg?w=740"
              alt="Quotes"
            />
            <div>Quotes</div>
          </Link>
        </div>
        <div className="card1 horizontal">
          <Link to="/QuotesSoundtrackDrama/Soundtrack" className={location.pathname === '/QuotesSoundtrackDrama/Soundtrack' ? 'active' : ''}>
            <img
              src="https://img.freepik.com/premium-vector/audio-music-player-with-earphone-music-notes-portable-media-player-white-isolated_138676-564.jpg?w=740"
              alt="Sound"
            />
            <div>Best Soundtrack</div>
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}

export default QuotesSoundtrackDrama;