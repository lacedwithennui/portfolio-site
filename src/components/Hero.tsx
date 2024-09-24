import React, { ReactNode, useEffect, useRef, useState } from "react";
import { until } from "./util.tsx";

export enum HeroGradientStyle {
    BlueGreen = "heroGradient", BlueLavender = "secondaryHeroGradient", LavenderBlueGreen = "tertiaryHeroGradient"
}

export default function Hero({src, title, gradientStyle}: {src?: string; title: string; gradientStyle?: HeroGradientStyle}) {
    return (
        <div id="heroContainer" className={gradientStyle + " topLevelContainer"}>
            {typeof src !== "undefined" ? <img src={src ? src : ""} id="hero" alt=""/> : <div id="hero" />}
            <h1>{title}</h1>
        </div>
    );
}

export function CarouselItem({title, children, src, href}: {title: string, children: any, src?: string, href?: string}) {
    return (
        <a href={href} className="carouselItem">
            {typeof src !== "undefined" ? <img src={src ? src : ""} className="hero" alt=""/> : <div className="hero" />}
            <div className="carouselItemContent">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </a>
    )
}

export function FeaturedHeroCarousel({children}: {children: JSX.Element[]}) {
    const [i, setI] = useState(0);
    const [prevI, setPrevI] = useState(1);

    window.onload = async () => {
        // const firstChild = document.querySelector(".carouselItem");
        // if(firstChild) {
        //     firstChild.classList.add("activeCarouselItem");
        // }
        handleDecrement(0)
        handleIncrement()
    }

    const animateIncrement = (carouselItems: NodeListOf<Element>, animationDuration: number = 500) => {
        if(animationDuration >= 250) {
            carouselItems[i].classList.add("carouselPrev");
            carouselItems[prevI].classList.add("carouselNext");
            setTimeout(() => {
                carouselItems[i].classList.remove("carouselPrev");
                carouselItems[prevI].classList.remove("carouselNext");
            }, animationDuration);
        }
    }

    const animateDecrement = (carouselItems: NodeListOf<Element>, animationDuration: number = 500) => {
        if(animationDuration >= 250) {
            carouselItems[i].classList.add("carouselNext");
            carouselItems[prevI].classList.add("carouselPrev");
            setTimeout(() => {
                carouselItems[i].classList.remove("carouselNext");
                carouselItems[prevI].classList.remove("carouselPrev");
            }, animationDuration);
        }
    }

    const handleIncrement = (animationDuration: number = 250) => {
        setPrevI(i);
        if(i + 1 > children.length - 1) {
            setI(0);
        }
        else {
            setI(i + 1);
        }
        const allChildHTMLs = document.querySelectorAll(".carouselItem");
        if(allChildHTMLs) {
            for(let j = 0; j < allChildHTMLs.length; j++) {
                allChildHTMLs[j].classList.remove("activeCarouselItem")
            }
            allChildHTMLs[i].classList.add("activeCarouselItem");
            animateIncrement(allChildHTMLs, animationDuration);
        }
        const tabIndicators = document.querySelectorAll(".carouselTabIndicatorButton");
        console.log(tabIndicators.length)
        if(tabIndicators) {
            for(let j = 0; j < tabIndicators.length; j++) {
                tabIndicators[j].classList.remove("activeIndicator");
            }
            tabIndicators[i].classList.add("activeIndicator");
        }
    }
    const handleDecrement = (animationDuration: number = 250) => {
        setPrevI(i);
        if(i - 1 < 0) {
            setI(children.length - 1);
        }
        else {
            setI(i - 1);
        }
        const allChildHTMLs = document.querySelectorAll(".carouselItem");
        if(allChildHTMLs) {
            for(let j = 0; j < allChildHTMLs.length; j++) {
                allChildHTMLs[j].classList.remove("activeCarouselItem")
            }
            allChildHTMLs[i].classList.add("activeCarouselItem");
            animateDecrement(allChildHTMLs, animationDuration);
        }
        const tabIndicators = document.querySelectorAll(".carouselTabIndicatorButton");
        console.log(tabIndicators.length)
        if(tabIndicators) {
            for(let j = 0; j < tabIndicators.length; j++) {
                tabIndicators[j].classList.remove("activeIndicator");
            }
            tabIndicators[i].classList.add("activeIndicator");
        }
    }
    const handleChangeFromTabs = (newNumber: number) => {
        setPrevI(i);
        setI(newNumber);
        const allChildHTMLs = document.querySelectorAll(".carouselItem");
        if(allChildHTMLs) {
            for(let j = 0; j < allChildHTMLs.length; j++) {
                allChildHTMLs[j].classList.remove("activeCarouselItem")
            }
            allChildHTMLs[newNumber].classList.add("activeCarouselItem");
            // if(i < newNumber) {
            //     animateDecrement(allChildHTMLs, 500);
            // }
            // else if(i > newNumber) {
            //     animateDecrement(allChildHTMLs, 500);
            // }
            // else {
            //     animateDecrement(allChildHTMLs, 0);
            // }
        }
    }

    return (
        <div className="carousel" id="hero">
            <button className="scrollButton scrollLeftButton" onClick={() => {
                handleDecrement()
            }}>◀</button>
            <button className="scrollButton scrollRightButton" onClick={() => {
                // setI(i + 1);
                handleIncrement()
            }}>▶</button>
            {children}
            <CarouselTabIndicator numberOfItems={children.length} updateSelectedCallback={(newNumber: number) => handleChangeFromTabs(newNumber)}/>
        </div>
    )
}

function CarouselTabIndicator({numberOfItems, updateSelectedCallback}: {numberOfItems: number, updateSelectedCallback: Function}) {
    let buttons: JSX.Element[] = [];

    for(let i = 0; i < numberOfItems; i++) {
        buttons.push(
            <button
                className="carouselTabIndicatorButton"
                onClick={(event) => {
                    updateSelectedCallback(i);
                    for(let element of document.querySelectorAll(".activeIndicator")) {
                        element.classList.remove("activeIndicator")
                    }
                    (event.target as HTMLElement).classList.add("activeIndicator");
                }}></button>
        );
    }
    return (
        <div className="carouselTabIndicator">
            {buttons}
        </div>
    )
}

export function PageTitle({src, title, gradientStyle}: {src?: string; title: string; gradientStyle?: HeroGradientStyle}) {
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
        <div id="heroContainer" className={gradientStyle + " topLevelContainer"}>
            {typeof src !== "undefined" ? <img src={imageUrl} id="hero" alt=""/> : <div id="hero" />}
            <h1>{title}</h1>
        </div>
    );
}