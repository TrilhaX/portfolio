import "./projects.css";
import {TiltImage} from "./Functions";
import pokedexImg from "../assets/pokedexImage.png";
import calculadoraImg from "../assets/calculadoraImage.png";
import snakegameImg from "../assets/snakegameImage.png";

function Projetos() {
    const images = [
        {
            id: 1,
            src: pokedexImg,
            alt: "Pokedex",
            css: ["30rem", "8px"],
            title: "Pokedex",
            description: "In this project, I created a Pokédex through a search feature, where the user enters the desired Pokémon and then its respective information appears."
        },
        {
            id: 2,
            src: calculadoraImg,
            alt: "Calculator",
            css: ["30rem", "8px"],
            title: "Calculator",
            description: "A brief project I made to learn more about TypeScript, where I basically created an advanced calculator, showing the result, a step-by-step explanation of the calculation, and a graph of the function."
        },
        {
            id: 3,
            src: snakegameImg,
            alt: "Snake Game",
            css: ["30rem", "8px"],
            title: "Snake Game",
            description: "To make this game, I used canvas, which is widely used for games on web pages. In this case, I decided to create the classic Snake game."
        },
    ]
    return (
        <section id="fifthSection">
            <h1>Projetos</h1>
            <div className="projetos">
                {images.map(({ id, src, alt, css, title, description }) => {
                    return (
                        <div className="card" key={id}>
                            <h2>{title}</h2>
                            <a href="https://github.com/TrilhaX/pokedex" target="_blank" rel="noreferrer">
                                <TiltImage src={src} alt={alt} style={{ width: css[0], borderRadius: css[1] }} />
                            </a>
                            <p>
                                {description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Projetos;