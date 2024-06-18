import React, { useEffect, useState } from 'react';
import WineCard from '../components/WineCard';

const Home = () => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/wines')
      .then(response => response.json())
      .then(data => setWines(data));
  }, []);

  return (
    <div className="home">
      {wines.map(wine => (
        <WineCard key={wine.id} wine={wine} />
      ))}
    </div>
  );
};

export default Home;