import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
