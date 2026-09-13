import "./skills.css";
import brasilBandeira from "../assets/brasilbandeira.jpg";
import usaBandeira from "../assets/usabandeira.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import luaLogo from "../assets/lua.png";
import tsLogo from "../assets/typescript.png";
import gitLogo from "../assets/gitlogo.png";
import githubLogo from "../assets/githublogobranca.png";
import vscodeLogo from "../assets/vscodelogo.png";
import figmaLogo from "../assets/figmalogo.png";
import { TiltImage } from "./Functions";
import { translations, type Language } from "./translations";

interface Props {
  lang: Language;
}

function Skills({ lang }: Props) {
    const t = translations[lang];

    const images = [
        { id: "portuguese", src: brasilBandeira, label: t.skillsLabels.portuguese, size: ["20rem", "15rem"] },
        { id: "english", src: usaBandeira, label: t.skillsLabels.english, size: ["20rem", "15rem"] },
        { id: "html", src: htmlLogo, label: t.skillsLabels.html, size: ["5rem", "5rem"] },
        { id: "css", src: cssLogo, label: t.skillsLabels.css, size: ["5rem", "5rem"] },
        { id: "javascript", src: jsLogo, label: t.skillsLabels.js, size: ["5rem", "5rem"] },
        { id: "lua", src: luaLogo, label: t.skillsLabels.lua, size: ["5rem", "5rem"] },
        { id: "typescript", src: tsLogo, label: t.skillsLabels.ts, size: ["5rem", "5rem"] },
        { id: "git", src: gitLogo, label: "Git", size: ["5rem", "5rem"] },
        { id: "github", src: githubLogo, label: "GitHub", size: ["5rem", "5rem"] },
        { id: "vscode", src: vscodeLogo, label: "Visual Studio Code", size: ["5rem", "5rem"] },
        { id: "figma", src: figmaLogo, label: "Figma", size: ["5rem", "5rem"] },
    ];    

    return (
        <div className="skills" id="skills">
            <section id="thirdSection" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1>{t.sections.languagesTitle}</h1>
                <div id="flags" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10rem", justifyContent: "center", margin: "5rem 0 2rem 0" }}>
                    {images.slice(0,2).map(({id, src, label, size}) => (
                        <div key={id} id={id} style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2rem 0" }}>
                            <TiltImage src={src} alt={label} style={{ boxShadow: "none", width: size[0], height: size[1] }} />
                            <p>{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="fourthSection">
                <h1>{t.sections.skillsTitle}</h1>
                <div id="linguagens" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5rem", justifyContent: "center", margin: "5rem 0 2rem 0" }}>
                    {images.slice(2,7).map(({id, src, label, size}) => (
                        <div key={id} id={id} style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2rem 0" }}>
                            <TiltImage src={src} alt={label} style={{ boxShadow: "none", width: size[0], height: size[1] }} />
                            <p>{label}</p>
                        </div>
                    ))}
                </div>

                <h1>{t.sections.toolsTitle}</h1>
                <div id="ferramentas" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10rem", justifyContent: "center", margin: "5rem 0 2rem 0" }}>
                    {images.slice(7,11).map(({id, src, label, size}) => (
                        <div key={id} id={id} style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2rem 0" }}>
                            <TiltImage src={src} alt={label} style={{ boxShadow: "none", width: size[0], height: size[1] }} />
                            <p>{label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Skills;