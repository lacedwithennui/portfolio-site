import React from "react";
import linkedInLogo from "../assets/images/linkedin-logo.svg";
import gitHubLogo from "../assets/images/github-logo.svg";
import { ABlank } from "./util.tsx";

export default function Footer() {
    return(
        <>
            <div className="footer">
                <div className="footerColumn">
                    <h1>Contact</h1>
                    <h3>Cell - <ABlank href="tel:+15712481466">(571) 248-1466</ABlank></h3>
                    <h3>Email - <ABlank href="mailto:hazel@hpbelmont.com">hazel@hpbelmont.com</ABlank></h3>
                </div>
                <div className="footerColumn">
                    <h1>Pages</h1>
                    <a href="/"><h3>Home</h3></a>
                    <a href="/portfolio"><h3>Portfolio</h3></a>
                </div>
                <div className="footerColumn">
                    <h1>Find Me</h1>
                    <ABlank href="https://www.linkedin.com/in/benjamin-belmont-714a491ab/" classes="flexRow alignedCenter"><img src={linkedInLogo} alt="" className="inverted footerImg" /> <h3>/benjamin-belmont-714a491ab</h3></ABlank>
                    <ABlank href="https://github.com/lacedwithennui" classes="flexRow alignedCenter"><img src={gitHubLogo} alt="" className="inverted footerImg" /> <h3>/lacedwithennui</h3></ABlank>
                </div>
            </div>
        </>
    );
}