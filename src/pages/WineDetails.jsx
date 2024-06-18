// src/pages/WineDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const WineDetails = () => {
  const { id } = useParams();
  const [wine, setWine] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/wines/${id}`)
      .then(response => response.json())
      .then(data => setWine(data));
  }, [id]);

  if (!wine) return <p>Caricamento...</p>;

  return (
    <div className="wine-details">
      <img src={wine.image} alt={wine.name} className="wine-image" />
      <div className="wine-details-content">
        <h1>{wine.name}</h1>
        <p className="winery">{wine.winery}</p>
        <p className="description">{wine.description}</p>
        <p className="price">Prezzo: {wine.price}€</p>
        <p className="quantity">Quantità disponibile: {wine.quantity}</p>
        <button>Aggiungi</button>
      </div>
    </div>
  );
};

export default WineDetails;
