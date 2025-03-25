import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card'; 

const Favorites = () => {
  const favorites = useSelector((state) => state.products.products.filter((product) => product.isFavorite));

  return (
    <div>
      <h2>Избранное</h2>
      <div className="card-container">
        {favorites.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
