import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite, addToCart, removeFromCart, removeFromFavorites } from '../store';

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (product.isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(toggleFavorite(product.id));
    }
  };

  const handleAddToCart = () => {
    if (product.inCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product.id));
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}₽</p>
      <button
        style={{ color: product.isFavorite ? 'red' : 'black' }}
        onClick={handleFavoriteClick}
      >
        {product.isFavorite ? '❤️' : '🤍'} Избранное
      </button>
      <button
        style={{ color: product.inCart ? 'green' : 'black' }}
        onClick={handleAddToCart}
      >
        {product.inCart ? '🛒 В корзине' : '🛒 Добавить в корзину'}
      </button>
    </div>
  );
};

export default Card;
