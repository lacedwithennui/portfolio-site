import React from "react";
import { CardNeue } from "../components/Card.tsx";
import { paths } from "../components/util.tsx";

export default function Playground() {
    return (
        <>
            <CardNeue title="Portfolio Website" titleLink="/" icons={<><>
                            <img src={paths.images + "react-logo.svg"} alt="ReactJS logo" className="cardTitleImage" />
                            <img src={paths.images + "typescript-logo.svg"} alt="TypeScript logo" className="cardTitleImage" />
                        </></>} cardOutButton={<></>} uncontained>
                        The website you're reading this from was written in ReactJS with JSX and TypeScript, and it is open source. The website
                    (as you probably know) is available at <a href="/">hpbelmont.com</a>.
            </CardNeue>
        </>
    );
}
