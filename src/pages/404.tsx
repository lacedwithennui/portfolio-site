import React, { useEffect } from "react";
import Hero, { HeroGradientStyle } from "../components/Hero.tsx";

export default function NotFound() {
    useEffect(() => {
        document.title = "Hazel Belmont | 404"
    }, []);
    return(
        <Hero gradientStyle={HeroGradientStyle.BlueGreen} title="Error 404: Page Not Found" />
    );
}