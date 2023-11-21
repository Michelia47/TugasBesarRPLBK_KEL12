import React from 'react';
import './TentangKami.css'; 
import Navbar from './main/Navbar';

const TentangKami = () => {
  return (
    <div>
        <div><Navbar></Navbar></div>
        <h1>Tentang Kami</h1>
    <div className="about-us-container">
      <div className="text-container">
        <div className='y'>
        <y>K-LIST</y>
        </div>
        <div className='t'>
        <t>
        K-LIST adalah aplikasi yang menyediakan informasi rekomendasi drama korea dengan deskripsi profil drama, cast, dan sinopsis.  
        </t>        
        </div>
        <div className='t'>
        <t>
        K-LIST  juga menyediakan informasi quotes dan soundtrack drama korea dengan deskripsi quotes dan juga best soundtrack.  
        </t>        
        </div>
        <div className='t'>
        <t>
        K-LIST ditujukan sebagai media hiburan untuk melihat rekomendasi drama korea dengan cerita yang seru dan menarik.  
        </t>        
        </div>
      </div>
    </div>
    </div>
  );
};

export default TentangKami;