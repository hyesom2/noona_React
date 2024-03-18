import { useState } from 'react';
import './App.css';

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  // [초기값이 담긴 state, state값을 변경해주는 함수]
  // UI에 보여줘야하는 값은 state로 만드러야한다. 

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