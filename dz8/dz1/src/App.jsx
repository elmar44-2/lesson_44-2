import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import myImage from './assets/image.jpg'; 




const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>Добро пожаловать в наше приложение!</h1>
      </header>
      <main>
        <section>
          <h2>Пример использования компонента</h2>
          <MyComponent />
        </section>
        <section>
          <h2>Изображение на странице</h2>
          <img src={myImage} alt="Пример изображения" className="my-image" />
        </section>
      </main>
      <footer>
        <p>© 2025 Пример сайта</p>
      </footer>
    </div>
  );
};

export default App;
