import { getByDisplayValue } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState("");

  const handleKeyPress = (event) => {
    const buttons = document.querySelectorAll('button');
    Array.from(buttons).forEach(button => {
      if(event.key === button.innerText) {
        setResult(result + event.key);      }
    });
    
    if (event.key === 'Enter' || event.key === '=') {
      setResult(eval(result).toString());
    } else if (event.key === 'd') {
      setResult(result.slice(0, -1));
    } else if  (event.key === 'c') {
      setResult("");
    }
    
  }

return (
  <div className="Calculator">

    <form>
      <input type="text" className="display" value={result} onKeyPress={handleKeyPress} />
    </form>
    <button onClick={(e) => setResult("")} id="clear" className="span-two">AC</button>
    <button onClick={(e) => setResult(result.slice(0, -1))} id="backspace">DEL</button>
    <button name="/" onClick={(e) => setResult(result.concat(e.target.name))}>/</button>
    <button name="7" onClick={(e) => setResult(result.concat(e.target.name))} >7</button>
    <button name="8" onClick={(e) => setResult(result.concat(e.target.name))}>8</button>
    <button name="9" onClick={(e) => setResult(result.concat(e.target.name))}>9</button>
    <button name="*" onClick={(e) => setResult(result.concat(e.target.name))} >*</button>
    <button name="4" onClick={(e) => setResult(result.concat(e.target.name))}>4</button>
    <button name="5" onClick={(e) => setResult(result.concat(e.target.name))}>5</button>
    <button name="6" onClick={(e) => setResult(result.concat(e.target.name))}>6</button>
    <button name="-" onClick={(e) => setResult(result.concat(e.target.name))}>-</button>
    <button name="1" onClick={(e) => setResult(result.concat(e.target.name))}>1</button>
    <button name="2" onClick={(e) => setResult(result.concat(e.target.name))}>2</button>
    <button name="3" onClick={(e) => setResult(result.concat(e.target.name))}>3</button>
    <button name="+" onClick={(e) => setResult(result.concat(e.target.name))}>+</button>
    <button name="." onClick={(e) => setResult(result.concat(e.target.name))}>.</button>
    <button name="0" onClick={(e) => setResult(result.concat(e.target.name))}>0</button>
    <button name="=" onClick={() => setResult(eval(result).toString())} id="result" className="span-two">=</button>
  </div>
);
}

export default App;
