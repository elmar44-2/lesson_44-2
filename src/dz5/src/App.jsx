import React, { useState, useRef } from 'react';
import { Button, Input } from "antd";



const Text = ({ value }) => {
  return <div>Текущий ввод: {value}</div>;
};


const CustomInput = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);


  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  };


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setInputValue('');
    }
  };

  return (
    <div>
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Введите текст"
      />
      <Button onClick={handleButtonClick}>Установить фокус на поле ввода</Button>
      <Text value={inputValue} />
    </div>
  );
};

export default CustomInput;

