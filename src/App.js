import { useState } from 'react';
import './App.css';

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);

  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);

    console.log('counter', counter);
    console.log('counter2', counter2);
  };

  return (
    <div>
      <h1>counter: { counter }</h1>
      <button onClick={ increase } type="button">Click!</button>
      <h1>counter2: { counter2 }</h1>
      <button onClick={ increase } type="button">Click!</button>
    </div>
  );
}

export default App;