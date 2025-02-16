import React, { useState } from 'react';
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const themeStyles = {
    light: {
      backgroundColor: '#fff',
      color: '#000',
    },
    dark: {
      backgroundColor: '#333',
      color: '#fff',
    },
  };
  return (
    <div style={themeStyles[theme]}>
      <h1>Переключатель темы</h1>
      <button onClick={toggleTheme}>Переключить тему</button>
    </div>
  );
};
export default ThemeSwitcher;
