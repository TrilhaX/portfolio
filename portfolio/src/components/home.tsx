import React, { useEffect, useRef } from "react";
import "./home.css";
import perfilPhoto from "../assets/perfilPhoto.jpg";
import TiltImage from "./extraFunc";

const Home = () => {
    return (
        <div className="home-container" id="home">
            <main>
                <section>
                    <TiltImage src={perfilPhoto} alt="My Photo Of Instagram" style={{ width: "30rem", height: "30rem" }} />
                </section>

                <section className="home">
                    <div className="home-content">
                        <h1>Welcome!</h1>
                        <p
                            style={{
                                textAlign: "justify",
                                fontSize: "1.2rem",
                                lineHeight: "1.6",
                            }}
                        >
                            Welcome to my portfolio! Here, you’ll find a showcase of my
                            projects, skills, and experiences. I’m passionate about
                            technology, problem-solving, and creating solutions that make a
                            difference. Feel free to explore my work and get to know more
                            about my journey as a developer.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
