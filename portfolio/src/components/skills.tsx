import React from "react";
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
import TiltImage from "./extraFunc";

function Skills() {
    return (
        <div className="skills" id="skills">
            <section id="thirdSection" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1>Idiomas</h1>
                <div className="idiomas" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10rem", margin: "5rem 0 2rem 0" }}>
                    <div id="portugues">
                        <TiltImage src={brasilBandeira} alt="Bandeira do Brasil" style={{ width: "20rem" }} />
                        <p>Português - Nativo</p>
                    </div>
                    <div id="ingles">
                        <TiltImage src={usaBandeira} alt="Bandeira dos EUA" style={{ width: "20rem" }} />
                        <p>Inglês - Intermediário</p>
                    </div>
                </div>
            </section>

            <section id="fourthSection">
                <h1>Linguagens</h1>
                <div className="linguagens" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10rem" }}>
                    <div id="html">
                        <TiltImage src={htmlLogo} alt="HTML" style={{ boxShadow: "none" }} />
                        <p>HTML - Intermediário</p>
                    </div>
                    <div id="css">
                        <TiltImage src={cssLogo} alt="CSS" style={{ boxShadow: "none" }} />
                        <p>CSS - Intermediário</p>
                    </div>
                    <div id="javascript">
                        <TiltImage src={jsLogo} alt="JavaScript" style={{ boxShadow: "none" }} />
                        <p>JavaScript - Intermediário</p>
                    </div>
                    <div id="lua">
                        <TiltImage src={luaLogo} alt="Lua" style={{ boxShadow: "none" }} />
                        <p>Lua - Intermediário</p>
                    </div>
                    <div id="typescript">
                        <TiltImage src={tsLogo} alt="TypeScript" style={{ boxShadow: "none" }} />
                        <p>TypeScript - Iniciante</p>
                    </div>
                </div>

                <h1>Ferramentas</h1>
                <div id="ferramentas" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10rem", justifyContent: "center", margin: "5rem 0 2rem 0" }}>
                    <div id="git">
                        <TiltImage src={gitLogo} alt="Git" style={{ boxShadow: "none", width: "5rem", height: "5rem"}} />
                        <p>Git</p>
                    </div>
                    <div id="github">
                        <TiltImage src={githubLogo} alt="GitHub" style={{ boxShadow: "none", width: "5rem", height: "5rem"}} />
                        <p>GitHub</p>
                    </div>
                    <div id="vscode">
                        <TiltImage src={vscodeLogo} alt="VS Code" style={{ boxShadow: "none", width: "5rem", height: "5rem"}} />
                        <p>Visual Studio Code</p>
                    </div>
                    <div id="figma">
                        <TiltImage src={figmaLogo} alt="Figma" style={{ boxShadow: "none", width: "5rem", height: "5rem"}} />
                        <p>Figma</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;