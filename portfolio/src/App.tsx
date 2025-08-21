import { useState } from 'react'
import './App.css'
import Home from './components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <h4>
            João Vitor Trilha Richartz
          </h4>
          <ul>
            <li className='Home'>
              <a href="#">Home</a>
            </li>
            <li className='About'>
              <a href="#">About</a>
            </li>
            <li className='Skills'>
              <a href="#">Skills</a>
            </li>
            <li className="Projects">
              <a href="#">Projects</a>
            </li>
          </ul>
        </nav>
      </header>
      <Home />
    </>
  )
}

export default App
