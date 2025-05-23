import { useState } from 'react';
import './App.css';

function App() {
  const [darkTheme, setTheme] = useState(false);
  return (
    <div className="App">
      <p>State: {darkTheme.toString()}</p>
      <button onClick={()=>setTheme(init => !init)}>button</button>
    </div>
  );
}

export default App;
