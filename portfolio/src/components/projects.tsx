import React from "react";
import "./projects.css";

function Projetos(): JSX.Element {
    return (
        <section id="fifthSection">
            <h1>Projetos</h1>
            <div className="projetos">
                <div className="card">
                    <a href="https://github.com/TrilhaX/pokedex" target="_blank" rel="noreferrer">
                        <img src="/pokedexImage.png" alt="Projeto 1" />
                    </a>
                    <h2>Pokedex</h2>
                    <p>Nesse meu projeto eu fiz uma pokedex através de um search, onde o
                        usuário coloca o pokemon desejado e então aparece suas respectivas
                        informações.</p>
                </div>

                <div className="card">
                    <a href="https://github.com/TrilhaX/calculadora2" target="_blank" rel="noreferrer">
                        <img src="/calculadoraImage.png" alt="Projeto 2" />
                    </a>
                    <h2>Calculadora</h2>
                    <p>Um breve projeto que eu fiz para poder aprender mais sobre o TypeScript,
                        onde basicamente eu fiz uma calculadora avançada, mostrando resultado,
                        conta explicada passo a passo e gráfico da função.</p>
                </div>

                <div className="card">
                    <a href="https://github.com/TrilhaX/jogoDaCobrinha" target="_blank" rel="noreferrer">
                        <img src="/snakegameImage.png" alt="Projeto 3" />
                    </a>
                    <h2>Jogo Da Cobrinha</h2>
                    <p>Para fazer esse jogo utilizei canvas, muito usado para jogos em páginas web.
                        Nesse caso, resolvi fazer o jogo da cobrinha.</p>
                </div>
            </div>
        </section>
    );
}

export default Projetos;
