import { useState } from 'react';
import './App.css';
import Home from './components/home';
import Skills from './components/skills';
import Projetos from './components/projects';
import linkedinImg from './assets/linkedin.png';
import githubImg from './assets/githublogo.png';
import instagramImg from './assets/instagramlogo.png';
import { handleThemeChange, TiltImage } from './components/Functions';
import { translations, type Language } from './components/translations';

function App() {
  const [lang, setLang] = useState<Language>('pt');
  const t = translations[lang];
  console.log(lang, setLang)

  return (
    <div className="content">
      <header>
        <nav>
          <h4>João Vitor Trilha Richartz</h4>
          <ul>
            <li className="Home"><a href="#home">{t.nav.home}</a></li>
            <li className="Skills"><a href="#thirdSection">{t.nav.languages}</a></li>
            <li className="Skills"><a href="#fourthSection">{t.nav.skills}</a></li>
            <li className="Projects"><a href="#fifthSection">{t.nav.projects}</a></li>
            
            {/* Seletor de Idioma */}
            <div className="lang-switcher">
              <button 
                className={lang === 'pt' ? 'active' : ''} 
                onClick={() => setLang('pt')}
              >
                PT
              </button>
              <span>|</span>
              <button 
                className={lang === 'en' ? 'active' : ''} 
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>

            {/* Alternador de Tema */}
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
        <Home lang={lang} />
        <Skills lang={lang} />
        <Projetos lang={lang} />
      </main>
      <footer>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/joao-vitor-trilha-richartz-023257348/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <TiltImage src={linkedinImg} alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://github.com/TrilhaX" aria-label="GitHub" target="_blank" rel="noreferrer">
            <TiltImage
              src={githubImg}
              alt="GitHub"
              style={{ width: '30px', height: '30px' }}
              id="github-icon"
            />
          </a>
          <a href="https://www.instagram.com/trilha.jv/" aria-label="Instagram" target="_blank" rel="noreferrer">
            <TiltImage src={instagramImg} alt="Instagram" style={{ width: '30px', height: '30px' }} />
          </a>
          <h2>joaotrilha01@gmail.com</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;