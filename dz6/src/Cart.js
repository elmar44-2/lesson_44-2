import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.products.filter((product) => product.inCart));

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2>Корзина</h2>
      <div className="card-container">
        {cartItems.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}₽</p>
            <button onClick={() => handleRemoveFromCart(product.id)}>Удалить из корзины</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
