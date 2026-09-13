import "./projects.css";
import { TiltImage } from "./Functions";
import pokedexImg from "../assets/pokedexImage.png";
import calculadoraImg from "../assets/calculadoraImage.png";
import snakegameImg from "../assets/snakegameImage.png";
import { translations, type Language } from "./translations";

interface Props {
  lang: Language;
}

function Projetos({ lang }: Props) {
    const t = translations[lang];

    const images = [
        {
            id: 1,
            src: pokedexImg,
            alt: "Pokedex",
            css: ["30rem", "8px"],
            title: t.projects.pokedex.title,
            description: t.projects.pokedex.description,
            link: "https://github.com/TrilhaX/pokedex"
        },
        {
            id: 2,
            src: calculadoraImg,
            alt: "Calculator",
            css: ["30rem", "8px"],
            title: t.projects.calculator.title,
            description: t.projects.calculator.description,
            link: "https://github.com/TrilhaX"
        },
        {
            id: 3,
            src: snakegameImg,
            alt: "Snake Game",
            css: ["30rem", "8px"],
            title: t.projects.snake.title,
            description: t.projects.snake.description,
            link: "https://github.com/TrilhaX"
        },
    ];

    return (
        <section id="fifthSection">
            <h1>{t.sections.projectsTitle}</h1>
            <div className="projetos">
                {images.map(({ id, src, alt, css, title, description, link }) => (
                    <div className="card" key={id}>
                        <h2>{title}</h2>
                        <a href={link} target="_blank" rel="noreferrer">
                            <TiltImage src={src} alt={alt} style={{ width: css[0], borderRadius: css[1] }} />
                        </a>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projetos;