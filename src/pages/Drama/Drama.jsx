import React, { useState, useEffect } from 'react';
import './Drama.css';
import Navbar from '../../main/Navbar';
import Api from '../../api/apitugas-api';
import DramaList from "./DramaList";

const Drama = () => {
  const [dramas, setDramas] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.get('/dramas').then(res=>{
          setDramas(res.data);
        })
        .catch(err => {
          setError(err.message);
        })
        .finally(()=>{
          setLoading(false);
        })
      }, []);

  return (
    <div>
      <div><Navbar></Navbar></div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {dramas && <DramaList dramas={dramas}/>}
    </div>
  );
}        

export default Drama;