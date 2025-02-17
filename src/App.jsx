import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import TitleChanger from './TitleChanger';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <TitleChanger theme={theme} />
      <ThemeSwitcher />
    </div>
  );
};

export default App;
