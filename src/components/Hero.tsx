import React, { useEffect, useState } from "react";

export enum HeroGradientStyle {
    BlueGreen = "heroGradient", BlueLavender = "secondaryHeroGradient", LavenderBlueGreen = "tertiaryHeroGradient"
}

export default function Hero({src, title, gradientStyle}: {src?: string; title: string; gradientStyle?: HeroGradientStyle}) {
    const [imageUrl, setImageUrl] = useState("");
    useEffect(() => {
        async function set() {
            if(typeof src !== "undefined") {
                setImageUrl(src)
            }
        }
        set();
    });

    return (
        <div id="heroContainer" className={gradientStyle}>
            {typeof src !== "undefined" ? <img src={imageUrl} id="hero" alt=""/> : <div id="hero" />}
            <h1>{title}</h1>
        </div>
    );
}