import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Manger végétariens réduit votre impact environnemental</p>
      <button onClick={() => navigate('/recipes')}>Recettes végétariennnes</button>
    </div>
  )
}

export default Home;