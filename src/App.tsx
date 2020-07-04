import React from "react";
import { Box, Button } from "grommet";
import { Github, Linkedin, Twitter } from "grommet-icons";
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
                <Box
                    direction="row"
                    gap="small"
                    margin={{
                        bottom: "medium",
                    }}
                >
                    <Button
                        href="https://www.github.com/stringsaeed"
                        target="_blank"
                        onClick={() =>
                            window.open("https://www.github.com/stringsaeed")
                        }
                        hoverIndicator
                        label="Github"
                        icon={<Github />}
                    />
                    <Button
                        onClick={() =>
                            window.open("https://www.twitter.com/stringsaeed")
                        }
                        hoverIndicator
                        icon={<Twitter />}
                        label="Twitter"
                    />
                    <Button
                        onClick={() =>
                            window.open(
                                "whatsapp://send?phone=+201118784615&abid=+201118784615&text=Hi"
                            )
                        }
                        hoverIndicator
                        label="Whatsapp"
                    />
                    <Button
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/mohamed-saeed-480a43b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsD4dLTMfTtG2QAfz%2BGyvVA%3D%3D"
                            )
                        }
                        icon={<Linkedin />}
                        hoverIndicator
                        label="Linkedin"
                    />
                </Box>
                <br />
                <ul>
                    <li>
                        <p>
                            <span>
                                Graduated from{" "}
                                <span>
                                    <a href="#">El Shoroq Academy</a>
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
