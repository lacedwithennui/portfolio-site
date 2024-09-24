import { paths, vwToPx } from "./util.tsx";
import React, { useEffect, useRef, useState } from "react";

export enum CardWidthType {
    Full = "fullWidthCard", Default = "defaultWidthCard"
}

interface CardProps {
    children: any;
    title?: string;
    titleLink?: string;
    icons?: React.JSX.Element;
    cardOutButton?: React.JSX.Element;
    cardWidthType?: CardWidthType;
    uncontained?: boolean;
}

interface CardViewProps {
    children: any;
    title?: string;
    containerClasses?: string;
    internalClasses?: string;
}

function inRect(rect: DOMRect, x?: number, y?: number) {
    if(x === undefined && y !== undefined) {
        return y! <= rect.top && y! >= rect.bottom
    }
    if(y === undefined && x !== undefined) {
        return x! <= rect.right && x! >= rect.left
    }
    if(x !== undefined && y !== undefined) {
        return x! <= rect.right && x! >= rect.left && y! <= rect.top && y! >= rect.bottom
    }
    return false;
}

export default function Card({children, title, titleLink, icons, cardOutButton, cardWidthType = CardWidthType.Default, uncontained = false}: CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const initialMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const cardElement = cardRef.current;

        if (cardElement) {
            cardElement.style.setProperty("--xVal", `100px`);
            cardElement.style.setProperty("--yVal", `200px`);
            const handleMouseEnter = (event: MouseEvent) => {
                const rect = cardElement.getBoundingClientRect();
                initialMousePos.current = {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                };
            }

            const handleMouseMove = (event: MouseEvent) => {
                const rect = cardElement.getBoundingClientRect();
                const currentMousePos = {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                };

                const deltaX = (currentMousePos.x - initialMousePos.current.x) * 0.8;
                const deltaY = (currentMousePos.y - initialMousePos.current.y) * 0.8;

                let newXVal = parseFloat(getComputedStyle(cardElement).getPropertyValue("--xVal").replace("px", "")) + deltaX;
                let newYVal = parseFloat(getComputedStyle(cardElement).getPropertyValue("--yVal").replace("px", "")) + deltaY;

                // Restrict movement logic
                const padding = 20; // Amount of padding from the edge
                newXVal = Math.min(Math.max(newXVal, padding), rect.width - padding);
                newYVal = Math.min(Math.max(newYVal, padding), rect.height - padding);

                cardElement.style.setProperty("--xVal", `${newXVal}px`);
                cardElement.style.setProperty("--yVal", `${newYVal}px`);

                initialMousePos.current = currentMousePos; // Update initial position for the next move
            }

            cardElement.addEventListener("mouseenter", handleMouseEnter);
            cardElement.addEventListener("mousemove", handleMouseMove);

            return () => {
                cardElement.removeEventListener("mouseenter", handleMouseEnter);
                cardElement.removeEventListener("mousemove", handleMouseMove);
            }
        }
    }, []);
    
    return (
        <>
            <div ref={cardRef} className={"card " + cardWidthType + " " + (uncontained ? "uncontainedCard" : "")}>
                <div className="arbitraryCardWrapper">
                    <div className="cardTitleContainer"><a href={titleLink} target="_blank" rel="noreferrer" className="cardTitleLink">{((typeof title === "undefined" || title === "") ? <></> : <h1 className="cardTitle">{title}<span className="cardTitleIcons">{icons}</span></h1>)}</a>{cardOutButton}</div>
                    <p className="cardMainTextContent">{children}</p>
                </div>
            </div>
        </>
    );
}

export function CardNeue({children, title, titleLink, icons, cardOutButton, cardWidthType = CardWidthType.Default, uncontained = false}: CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const initialMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const cardElement = cardRef.current;

        if (cardElement) {
            cardElement.style.setProperty("--xVal", `100px`);
            cardElement.style.setProperty("--yVal", `200px`);
            const handleMouseEnter = (event: MouseEvent) => {
                const rect = cardElement.getBoundingClientRect();
                initialMousePos.current = {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                };
            }

            const handleMouseMove = (event: MouseEvent) => {
                const rect = cardElement.getBoundingClientRect();
                const currentMousePos = {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                };

                const deltaX = (currentMousePos.x - initialMousePos.current.x) * 0.3;
                const deltaY = (currentMousePos.y - initialMousePos.current.y) * 0.3;

                let newXVal = parseFloat(getComputedStyle(cardElement).getPropertyValue("--xVal").replace("px", "")) + deltaX;
                let newYVal = parseFloat(getComputedStyle(cardElement).getPropertyValue("--yVal").replace("px", "")) + deltaY;

                // Restrict movement logic
                const padding = 20; // Amount of padding from the edge
                newXVal = Math.min(Math.max(newXVal, padding), rect.width - padding);
                newYVal = Math.min(Math.max(newYVal, padding), rect.height - padding);

                cardElement.style.setProperty("--xVal", `${newXVal}px`);
                cardElement.style.setProperty("--yVal", `${newYVal}px`);

                initialMousePos.current = currentMousePos; // Update initial position for the next move
            }

            cardElement.addEventListener("mouseenter", handleMouseEnter);
            cardElement.addEventListener("mousemove", handleMouseMove);

            return () => {
                cardElement.removeEventListener("mouseenter", handleMouseEnter);
                cardElement.removeEventListener("mousemove", handleMouseMove);
            }
        }
    }, []);
    return (
        <>
            <div ref={cardRef} className={"card " + cardWidthType + " " + (uncontained ? "uncontainedCard" : "")}>
                <div className="arbitraryCardWrapper">
                    <div className="cardTitleContainer"><a href={titleLink} target="_blank" rel="noreferrer" className="cardTitleLink">{((typeof title === "undefined" || title === "") ? <></> : <h1 className="cardTitle">{title}<span className="cardTitleIcons">{icons}</span></h1>)}</a>{cardOutButton}</div>
                    <p className="cardMainTextContent">{children}</p>
                </div>
                <img src={paths.images + "codesc.png"} className="cardimage" alt=""/>
            </div>
        </>
    )
}

export function CardOutButton({children, imgSrc, href}: {children: any; imgSrc: string; href: string}) {
    return(
        <a href={href} className="cardOutButtonA" target="_blank" rel="noreferrer"><div className="cardOutButton"><img src={imgSrc} alt="" className="cardOutButtonImg" />{children}</div></a>
    );
}

export function HorizontalCardView({children, title, containerClasses, internalClasses}: CardViewProps) {
    window.onload = (event) => scrollDisplayEventHandler(event);
    return(
        <>
            <div className={"cardViewContainer topLevelContainer " + containerClasses}>
                {((typeof title === "undefined" || title === "") ? <></> : <h1 className="cardViewTitle">{title}</h1>)}
                <div className={"horizontalCardView " + internalClasses} id={title} onScroll={(event) => scrollDisplayEventHandler(event)}>
                    {children}
                    <button className="scrollButton scrollRightButton" onClick={(event) => {
                        event.target["parentNode"].scrollBy({left: conditionalScrollAmount(event.target["parentNode"]), top: 0, behavior: "smooth"});
                        scrollDisplayEventHandler(event);
                    }}>▶</button>
                    <button className="scrollButton scrollLeftButton" style={{display: "none"}} onLoad={(event) => scrollDisplayEventHandler(event)} onClick={(event) => {
                        event.target["parentNode"].scrollBy({left: -conditionalScrollAmount(event.target["parentNode"]), top: 0, behavior: "smooth"});
                        scrollDisplayEventHandler(event);
                    }}>◀</button>
                </div>
            </div>
        </>
    )
}

export function VerticalCardView({children, title, containerClasses, internalClasses}: CardViewProps) {
    return(
        <>
            <div className={"cardViewContainer " + containerClasses}>
                {((typeof title === "undefined" || title === "") ? "" : <h1 className="cardViewTitle">{title}</h1>)}
                <div className={"verticalCardView " + internalClasses} id={title}>
                    {children}
                </div>
            </div>
        </>
    );
}

export function CardLogoIcon({fileName, altText}: {fileName: string, altText?: string}) {
    altText = altText ? altText : fileName;
    return (
        <img src={paths.images + fileName} alt={altText} className="cardTitleImage" />
    );
}

function scrollDisplayEventHandler(event) {
    let cardView: HTMLElement;
    if(event.type === "scroll") {
        cardView = event.target;
    }
    else if(event.type === "click") {
        cardView = event.target.parentNode;
    }
    else if(event.type === "load") {
        for(let i = 0; i < document.querySelectorAll(".horizontalCardView").length; i++) {
            let cardViewFromAll = document.querySelectorAll(".horizontalCardView").item(i) as HTMLElement;
            scrollButtonConditionalDisplay(cardViewFromAll);
        }
        cardView = document.querySelector(".horizontalCardView") as HTMLElement;
    }
    else {
        cardView = document.querySelector(".horizontalCardView") as HTMLElement;
    }
    scrollButtonConditionalDisplay(cardView);
}

function scrollButtonConditionalDisplay(cardView: HTMLElement) {
    if(cardView.scrollLeft <= vwToPx(3)) {
        (cardView.querySelector(".scrollLeftButton") as HTMLElement).style.display = "none";
        (cardView.querySelector(".scrollRightButton") as HTMLElement).style.display = "flex";
    }
    if(cardView.scrollLeft >= vwToPx(3)) {
        (cardView.querySelector(".scrollLeftButton") as HTMLElement).style.display = "flex";
        (cardView.querySelector(".scrollRightButton") as HTMLElement).style.display = "flex";
    }
    if(cardView.scrollLeft >= (cardView.scrollWidth - cardView.clientWidth) - vwToPx(3)) {
        (cardView.querySelector(".scrollLeftButton") as HTMLElement).style.display = "flex";
        (cardView.querySelector(".scrollRightButton") as HTMLElement).style.display = "none";
    }
}

function conditionalScrollAmount(cardView: HTMLElement): number {
    if(cardView.scrollLeft <= vwToPx(3) || cardView.scrollLeft >= (cardView.scrollWidth - cardView.clientWidth) - vwToPx(3)) {
        return vwToPx(31);
    }
    return vwToPx(53);
}