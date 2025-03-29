import React from 'react';
import useStore from './useStore';

function App() {
  const { counter, increment, decrement } = useStore();  

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
