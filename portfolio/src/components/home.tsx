import "./home.css";
import perfilPhoto from "../assets/perfilPhoto.jpg";
import { TiltImage } from "./Functions";
import { translations, type Language } from "./translations";

interface Props {
  lang: Language;
}

const Home = ({ lang }: Props) => {
    const t = translations[lang].home;

    return (
        <div className="home-container" id="home">
            <section>
                <TiltImage src={perfilPhoto} alt="João Vitor" style={{ width: "30rem", height: "35rem" }} />
            </section>

            <section className="home">
                <div className="home-content">
                    <h1>{t.title}</h1>
                    <p
                    style={{
                        textAlign: "justify",
                        fontSize: "1.2rem",
                        lineHeight: "1.6",
                        maxWidth: "30rem",
                    }}
                    >
                        {t.description}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;