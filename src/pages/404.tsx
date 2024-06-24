import React from "react";
import Hero, { HeroGradientStyle } from "../components/Hero.tsx";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Hazel Belmont | 404</title>
                <meta name="description" content="Error 404: Page Not Found" />
            </Helmet>
            <Hero gradientStyle={HeroGradientStyle.BlueGreen} title="Error 404: Page Not Found" />
        </>
    );
}