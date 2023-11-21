import React, { useState, useEffect } from "react";
import './Cast.css';
import Navbar from '../../main/Navbar';
import Api from '../../api/apitugas-api';
import CastList from "./CastList";

const Cast = () => {
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
      {dramas && <CastList dramas={dramas}/>}
    </div>
  );
}        

export default Cast