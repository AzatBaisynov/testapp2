import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    setText("")
  }

  return (
    <div className="App">
      <div className="inp">
        <input type="text" onInput={handleChange} value={text} />
        <div className="delete" onClick={handleClick}>X</div>
      </div>
    </div>
  );
}

export default App;
