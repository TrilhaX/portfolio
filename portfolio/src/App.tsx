import React from 'react';
import './App.css'
import Home from './components/home'

function App() {

  function handleThemeChange(): void {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');

    const applyFilter = (selector: string, filter: string): void => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.style.filter = filter;
      });
    };

    if (isDark) {
      html.style.filter = 'invert(1) hue-rotate(180deg)';
      applyFilter('img, video, svg, .slider-emoji-light, .slider-emoji-dark', 'invert(1) hue-rotate(180deg)');
      applyFilter('.slider', 'invert(0) hue-rotate(0deg)');
    } else {
      html.style.filter = 'invert(0) hue-rotate(0deg)';
      applyFilter('img, video, svg, .slider-emoji-light, .slider-emoji-dark', 'invert(0) hue-rotate(0deg)');
      applyFilter('.slider', 'invert(0) hue-rotate(0deg)');
    }

    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
  }

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
            <label className="switch">
              <label className="slider-emoji-light">☀️</label>
              <input type="checkbox" onClick={handleThemeChange} />
              <span className="slider"></span>
              <span className="slider-emoji-dark">🌙</span>
            </label>
          </ul>
        </nav>
      </header>
      <Home />
    </>
  )
}

export default App
