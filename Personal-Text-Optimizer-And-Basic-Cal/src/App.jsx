import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState('');
  const [optimizedText, setOptimizedText] = useState('');

  const optimizeText = () => {
    const optimized = inputText.toLowerCase().replace(/ /g, '_');
    setOptimizedText(optimized);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <h1>Nikhil's Optimizer</h1>
      <div className="card">
        <input className="inputText"
        type="text"
        id='inputText'
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text"
      />
        <button className="buttonText" onClick={optimizeText}>
          Optimize
        </button>
        <p>Your optimized text is: "{optimizedText}"</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count for optimization {count}
        </button>
      </div>
    </>
  )
}

export default App
