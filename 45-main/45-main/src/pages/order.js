import { useState } from 'react';
import useStore from '../store/store';

const OrderPage = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const user = useStore((state) => state.user);
  const addOrder = useStore((state) => state.addOrder);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      product,
      quantity,
      price,
      total: quantity * price,
      date: new Date().toISOString(),
    };

    addOrder(newOrder);
    alert('Ваш заказ успешно добавлен!');
  };

  if (!user) {
    return <div>Пожалуйста, войдите в систему, чтобы оформить заказ.</div>;
  }

  return (
    <div>
      <h1>Оформить заказ</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product">Продукт</label>
          <input
            id="product"
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Количество</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Цена за единицу</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Добавить заказ</button>
      </form>
    </div>
  );
};

export default OrderPage;
