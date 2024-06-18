// src/components/WineCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WineCard = ({ wine }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/wine/${wine.id}`);
  };

  return (
    <div className="wine-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <img src={wine.image} alt={wine.name} />
      <h2>{wine.name}</h2>
      <p>{wine.winery}</p>
    </div>
  );
};

export default WineCard;
