import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  return (
        <div>
          <h1>Current number: {num}</h1>
          <button onClick={() => setNum(num + 1)}>Add 1</button>
          <button onClick={() => setNum(num - 1)}>Subtract 1</button>
        </div>
      );
}

export default App;
