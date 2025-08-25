import './App.css'
import Home from './components/home'
import Skills from './components/skills';
import Projetos from './components/projects';
import linkedinImg from './assets/linkedin.png';
import githubImg from './assets/githublogo.png';
import instagramImg from './assets/instagramlogo.png';
import { handleThemeChange, TiltImage } from './components/Functions';

function App() {
  return (
    <div className='content'>:JSX.Element
      <header>
        <nav>
          <h4>João Vitor Trilha Richartz</h4>
          <ul>
            <li className='Home'><a href="#home">Home</a></li>
            <li className='Skills'><a href="#thirdSection">Languages</a></li>
            <li className='Skills'><a href="#fourthSection">Skills</a></li>
            <li className="Projects"><a href="#fifthSection">Projects</a></li>
            <label className="switch">
              <label className="slider-emoji-light">☀️</label>
              <input type="checkbox" onClick={handleThemeChange} />
              <span className="slider"></span>
              <span className="slider-emoji-dark">🌙</span>
            </label>
          </ul>
        </nav>
      </header>
      <main>
        <Home />
        <Skills />
        <Projetos />
      </main>
      <footer>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/joao-vitor-trilha-richartz-023257348/" aria-label="LinkedIn" target="_blank">
            <TiltImage src={linkedinImg} alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://github.com/TrilhaX" aria-label="GitHub" target="_blank">
            <TiltImage src={githubImg} alt="GitHub" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://www.instagram.com/trilha.jv/" aria-label="Instagram" target="_blank">
            <TiltImage src={instagramImg} alt="Instagram" style={{ width: '30px', height: '30px' }} />
          </a>
          <h2>joaotrilha01@gmail.com</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;