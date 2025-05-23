import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <h1>João Vitor Trilha Richartz</h1>
        <nav>
          <ul>
            <li><a href="#firstSection">Home</a></li>
            <li><a href="#secondSection">CV</a></li>
            <li><a href="#thirdSection">Idiomas</a></li>
            <li><a href="#fourthSection">Linguagens</a></li>
            <li><a href="#fourthSection">Ferramentas</a></li>
            <li><a href="#fifthSection">Projetos</a></li>
            <div className="theme-switch-container">
              <span className="mode-icon">🌞</span>
              <label className="switch">
                <input type="checkbox" id="themeToggle" aria-label="Alternar tema"></input>
                  <span className="slider"></span>
              </label>
              <span className="mode-icon">🌙</span>
            </div>
          </ul>
        </nav>
      </header>

      <main>
        <section id="firstSection">
          <img src="\myimage.png" alt="Minha Foto" style={{ width: "20vw" }} />
          <div className="apresentacao">
            <h1>
              PORTFOLIO
            </h1>
            <p>
              Olá! Meu nome é João Vitor Trilha, tenho 18 anos e sou apaixonado por<br></br>
              tecnologia e programação. Atualmente, estou desenvolvendo projetos<br></br>
              com Arduino, Tinkercad, Roblox Studio e Websites, explorando tanto a <br></br>
              Hardware e Software. Estou sempre em busca de aprender mais<br></br>
              e aprimorar minhas habilidades para criar soluções inovadoras.
            </p>
          </div>
        </section>
        <section id="secondSection">
          <h1>
            Curriculo Vitae
          </h1>
          <a href="https://docs.google.com/document/d/17aWSYEcvNh22HB_lV_TohQesjy9XNjzVH4lWdVsk_94/edit?pli=1&tab=t.0#heading=h.qk99bwhqsrpm" target="_blank">
            <img id="curriculoVitae" src="\cv.png" alt="Meu Curriculo Vitae"></img>
          </a>
          <p>
            Clique na imagem para poder ver melhor meu CV
          </p>
        </section>
        <section id="thirdSection">
          <h1>
            Idiomas
          </h1>
          <div className="idiomas">
            <div id="portugues">
              <img src="/brasilbandeira.jpg" alt=""></img>
              <p>
                Português - Nativo
              </p>
            </div>
            <div id="ingles">
              <img src="/usabandeira.png" alt=""></img>
              <p>
                Inglês - Intermediario
              </p>
            </div>
          </div>
        </section>
        <section id="fourthSection">
          <h1>
            Linguagens
          </h1>
          <div className="linguagens">
            <div id="html">
              <img src="/html.png" alt=""></img>
              <p>
                HTML - Intermediário
              </p>
            </div>
            <div id="css">
              <img src="/css.png" alt=""></img>
              <p>
                CSS - Intermediário
              </p>
            </div>
            <div id="javascript">
              <img src="/javascript.png" alt=""></img>
              <p>
                JavaScript - Intermediario
              </p>
            </div>
            <div id="lua">
              <img src="/lua.png" alt=""></img>
              <p>
                Lua - Intermediario
              </p>
            </div>
            <div id="typeScript">
              <img src="/typescript.png" alt=""></img>
              <p>
                TypeScript - Iniciante
              </p>
            </div>
          </div>
          <h1>
            Ferramentas
          </h1>
          <div id="ferramentas">
            <div id="git">
              <img src="/gitlogo.png" alt=""></img>
              <p>
                Git
              </p>
            </div>
            <div id="github">
              <img src="/githublogobranca.png" alt=""></img>
              <p>
                GitHub
              </p>
            </div>
            <div id="vscode">
              <img src="/vscodelogo.png" alt=""></img>
              <p>
                Visual Studio Code
              </p>
            </div>
            <div id="figma">
              <img src="/figmalogo.png" alt=""></img>
              <p>
                Figma
              </p>
            </div>
          </div>
        </section>
        <section id="fifthSection">
          <h1>Projetos</h1>
          <div className="projetos">
            <div className="card">
              <a href="https://github.com/TrilhaX/pokedex" target="_blank">
                <img src="/pokedexImage.png" alt="Projeto 1"></img>
              </a>
              <h2>Pokedex</h2>
              <p>Nesse meu projeto eu fiz uma pokedex atraves de um search, onde o
                usuario coloca o pokemon desejado e então aparece suas respectivas
                informações.</p>
            </div>

            <div className="card">
              <a href="https://github.com/TrilhaX/calculadora2" target="_blank">
                <img src="/calculadoraImage.png" alt="Projeto 2"></img>
              </a>
              <h2>Calculadora</h2>
              <p>Um breve projeto que eu fiz para poder aprender mais sobre o typescript
                onde basicamente eu fiz uma calcualdor avançada, onde ela pode mostrar
                o resultado, a conta explicada passo a passo e tambem em função o seu
                respectivo grafico.</p>
            </div>

            <div className="card">
              <a href="https://github.com/TrilhaX/jogoDaCobrinha" target="_blank">
                <img src="/snakegameImage.png" alt="Projeto 3"></img>
              </a>
              <h2>Jogo Da Cobrinha</h2>
              <p>Para fazer esse jogo utilizei algo chamado canvas, algo muito uitlizado
                para fazer jogos em paginas web. Nesse caso em especifico resolvi fazer
                o jogo da cobrinha.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/joao-vitor-trilha-richartz-023257348/" aria-label="LinkedIn" target="_blank"><img src="/linkedin.png" alt="Linkedin"></img></a>
          <a href="https://github.com/TrilhaX" aria-label="GitHub de João Vitor" target="_blank"><img src="/githublogo.png" alt="Instagram"></img></a>
          <a href="https://www.instagram.com/trilha.jv/" aria-label="Instagram" target="_blank"><img src="/instagramlogo.png" alt="Instagram"></img></a>
          <h2>joaotrilha01@gmail.com</h2>
        </div>
        <p>&copy; 2025 João Vitor Trilha Richartz. Todos os direitos reservados.</p>
      </footer>
      <script src="main.js"></script>
    </>
  );
}
