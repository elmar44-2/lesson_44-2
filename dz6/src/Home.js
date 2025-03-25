import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceRange } from '../store';
import Card from './Card'; 

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

export default Home;
