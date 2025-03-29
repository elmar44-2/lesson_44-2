import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Добро пожаловать в магазин</h1>
      <nav>
        <ul>
          <li>
            <Link href="/login">Войти</Link>
          </li>
          <li>
            <Link href="/order">Оформить заказ</Link>
          </li>
          <li>
            <Link href="/my-orders">Мои заказы</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
