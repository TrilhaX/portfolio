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
import {TiltImage} from "./Functions";

function Skills() {
    const images = [
        { id: "portuguese", src: brasilBandeira, label: "Portuguese - Native", size: ["20rem", "15rem"] },
        { id: "english", src: usaBandeira, label: "English - Intermediate", size: ["20rem", "15rem"] },
        { id: "html", src: htmlLogo, label: "HTML - Intermediate", size: ["5rem", "5rem"] },
        { id: "css", src: cssLogo, label: "CSS - Intermediate", size: ["5rem", "5rem"] },
        { id: "javascript", src: jsLogo, label: "JavaScript - Intermediate", size: ["5rem", "5rem"] },
        { id: "lua", src: luaLogo, label: "Lua - Intermediate", size: ["5rem", "5rem"] },
        { id: "typescript", src: tsLogo, label: "TypeScript - Beginner", size: ["5rem", "5rem"] },
        { id: "git", src: gitLogo, label: "Git", size: ["5rem", "5rem"] },
        { id: "github", src: githubLogo, label: "GitHub", size: ["5rem", "5rem"] },
        { id: "vscode", src: vscodeLogo, label: "Visual Studio Code", size: ["5rem", "5rem"] },
        { id: "figma", src: figmaLogo, label: "Figma", size: ["5rem", "5rem"] },
    ];    

    return (
        <div className="skills" id="skills">
            <section id="thirdSection" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1>Languages</h1>
                <div id="flags" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10rem", justifyContent: "center", margin: "5rem 0 2rem 0" }}>
                    {images.slice(0,2).map(({id, src, label, size}) => {
                        return(
                            <div key={id} id={id} style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2rem 0" }}>
                                <TiltImage src={src} alt={label} style={{ boxShadow: "none", width: size[0], height: size[1] }} />
                                <p>{label}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section id="fourthSection">
                <h1>Programming Language</h1>
                <div id="linguagens" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5rem", justifyContent: "center", margin: "5rem 0 2rem 0" }}>
                    {images.slice(2,7).map(({id, src, label, size}) => {
                        return(
                            <div key={id} id={id} style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2rem 0" }}>
                                <TiltImage src={src} alt={label} style={{ boxShadow: "none", width: size[0], height: size[1] }} />
                                <p>{label}</p>
                            </div>
                        )
                    })}
                </div>

                <h1>Tools</h1>
                <div id="ferramentas" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10rem", justifyContent: "center", margin: "5rem 0 2rem 0" }}>
                    {images.slice(7,11).map(({id, src, label, size}) => {
                        return(
                            <div key={id} id={id} style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2rem 0" }}>
                                <TiltImage src={src} alt={label} style={{ boxShadow: "none", width: size[0], height: size[1] }} />
                                <p>{label}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default Skills;