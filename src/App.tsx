import React from "react";
import { Button } from "./components";
import "./App.css";

function App() {
    return (
        <div className="AppContainer">
            <div className="ContentContainer">
                <div className="imageContainer">
                    <div className="image" />
                </div>
                <h2 className="name">Muhammed Saeed</h2>
                <h1>Mid Level Software Developer</h1>
                <h3>23 years</h3>
                <br />
                <div className="buttonGroup">
                    <a
                        style={{
                            gridArea: "github",
                        }}
                        className="link"
                        href="https://www.github.com/stringsaeed"
                    >
                        <Button>Github</Button>
                    </a>
                    <a
                        style={{
                            gridArea: "twitter",
                        }}
                        className="link"
                        href="https://www.twitter.com/stringsaeed"
                    >
                        <Button>Twitter</Button>
                    </a>
                    <a
                        style={{
                            gridArea: "whatsapp",
                        }}
                        className="link"
                        href="whatsapp://send?phone=+201118784615&abid=+201118784615&text=Hi"
                    >
                        <Button>Whatsapp</Button>
                    </a>
                    <a
                        style={{
                            gridArea: "linked",
                        }}
                        className="link"
                        href="https://www.linkedin.com/in/mohamed-saeed-480a43b6/"
                    >
                        <Button>Linkedin</Button>
                    </a>
                    <a
                        style={{
                            gridArea: "spotify",
                        }}
                        className="link"
                        href="https://open.spotify.com/user/22fqgfawfcjnp7irxkt2ozefi?si=WoZAX1EaSuSqEBLAAO2Q3Q"
                    >
                        <Button>Spotify</Button>
                    </a>
                </div>
                <br />
                <ul>
                    <li>
                        <p>
                            <span>
                                Graduated from{" "}
                                <span>
                                    <a href="/">El Shoroq Academy</a>
                                </span>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Worked as a <span> Backend Developer</span> @{" "}
                                <span>
                                    <a href="https://www.crevisoft.com/">
                                        Crevisoft
                                    </a>
                                </span>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Working as a{" "}
                                <span> Lead React Native Developer</span> @{" "}
                                <span>
                                    <a href="https://www.expandcart.com/en/">
                                        ExpandCart
                                    </a>
                                </span>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Working as a{" "}
                                <span> Mid-Level Full Stack Developer</span> @{" "}
                                <span>
                                    <a href="https://anspire.agency/">
                                        Anspire Agency
                                    </a>
                                </span>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Working as a{" "}
                                <span> (Part-Time) Front-End Developer</span> @{" "}
                                <span>
                                    <a href="https://rabbit-app.com/">
                                        Rabbit Scooters
                                    </a>
                                </span>
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
