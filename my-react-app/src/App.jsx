import { useState } from 'react'
import { RickAndMortyCharacters } from './components/RickAndMortyCharacters'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('dsaasd')

  const handleUserInput = (event)=>{
    
    console.log(event.target.value);
    setInput(event.target.value)
  }

  return <RickAndMortyCharacters/>
    /* <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={(event) => console.log(event)}>
          count is {count}
        </button>
        <p style={{ backgroundColor: "limegreen" }}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <input name='test' value={input} placeholder='Enter text' onChange={handleUserInput} />
    </> */
}

export default App;
