import useStore from '../store/store';

const MyOrdersPage = () => {
  const user = useStore((state) => state.user);
  const getUserOrders = useStore((state) => state.getUserOrders);
  
  const orders = getUserOrders();

  if (!user) {
    return <div>Пожалуйста, войдите в систему, чтобы просмотреть свои заказы.</div>;
  }

  if (orders.length === 0) {
    return <div>У вас пока нет заказов.</div>;
  }

  return (
    <div>
      <h1>Мои заказы</h1>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <h2>{order.product}</h2>
            <p>Количество: {order.quantity}</p>
            <p>Цена за единицу: {order.price}</p>
            <p>Итоговая стоимость: {order.total}</p>
            <p>Дата заказа: {new Date(order.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyOrdersPage;
