import React, { useState, useEffect } from 'react';

const TitleChanger = ({ theme }) => {
  const titles = ["Привет, мир!", "React — крутой!", "Учусь хукам", "Измени заголовок!"];
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  useEffect(() => {
    document.title = randomTitle;
  }, [theme]); 

  return null; 
};

export default TitleChanger;
