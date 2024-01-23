import React, { useEffect, useState } from "react";

export default function Hero({src, title}) {
    const [imageUrl, setImageUrl] = useState("");
    useEffect(() => {
        async function set() {
            setImageUrl(src)
        }
        set();
    });

    return (
        <div id="heroContainer">
            <img src={imageUrl} id="hero" alt=""/>
            <h1>{title}</h1>
        </div>
    )
}