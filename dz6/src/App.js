import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { toggleFavorite, addToCart, removeFromCart, removeFromFavorites, setPriceRange } from './store';

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

const Cart = () => {
  const cartItems = useSelector((state) => state.products.products.filter((product) => product.inCart));

  return (
    <div>
      <h2>Корзина</h2>
      <div className="card-container">
        {cartItems.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}₽</p>
            <button onClick={() => dispatch(removeFromCart(product.id))}>Удалить из корзины</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [priceRange, setPriceRangeValue] = useState({ minPrice: 0, maxPrice: 1000 });
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const minPrice = useSelector((state) => state.products.minPrice);
  const maxPrice = useSelector((state) => state.products.maxPrice);

  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRangeValue((prev) => {
      const newRange = { ...prev, [name]: value };
      dispatch(setPriceRange(newRange));
      return newRange;
    });
  };

  return (
    <div>
      <h2>Главная</h2>
      <div>
        <label>
          Минимальная цена: {minPrice}₽
          <input
            type="range"
            name="minPrice"
            min="0"
            max="1000"
            value={minPrice}
            onChange={handlePriceChange}
          />
        </label>
        <label>
          Максимальная цена: {maxPrice}₽
          <input
            type="range"
            name="maxPrice"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={handlePriceChange}
          />
        </label>
      </div>
      <div className="card-container">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Favorites, Cart, Home } from './components'; 

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Главная</Link> | <Link to="/favorites">Избранное</Link> | <Link to="/cart">Корзина</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

