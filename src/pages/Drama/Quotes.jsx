import React, { useState, useEffect } from 'react';
import './Quotes.css';
import Navbar from '../../main/Navbar';
import Api from '../../api/apitugas-api';
import QuotesList from "./QuotesList";

const Quotes = () => {
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
      {dramas && <QuotesList dramas={dramas}/>}
    </div>
  );
}        

export default Quotes;