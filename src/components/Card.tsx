import { vwToPx } from "./util";
import React from "react";

interface CardProps {
    children: any;
    title: string;
    titleLink?: string;
    icons?: React.JSX.Element;
    cardOutButton?: React.JSX.Element;
}

interface HorizontalCardViewProps {
    children: any;
    title: string;
    containerClasses?: string;
    internalClasses?: string;
}

export default function Card({children, title, titleLink, icons, cardOutButton}: CardProps) {
    return (
        <>
            <div className="card">
                <div className="cardTitleContainer"><a href={titleLink} target="_blank" rel="noreferrer" className="cardTitleLink"><h1 className="cardTitle">{title}{icons}</h1></a>{cardOutButton}</div>
                <p className="cardMainTextContent">{children}</p>
            </div>
        </>
    );
}

export function CardOutButton({children, imgSrc, href}: {children: any; imgSrc: string; href: string}) {
    return(
        <a href={href} className="cardOutButtonA" target="_blank" rel="noreferrer"><div className="cardOutButton"><img src={imgSrc} alt="" className="cardOutButtonImg" />{children}</div></a>
    );
}

export function HorizontalCardView({children, title, containerClasses, internalClasses}: HorizontalCardViewProps) {
    window.onload = (event) => scrollDisplayEventHandler(event);
    return(
        <>
            <div className={"cardViewContainer " + containerClasses}>
                <h1 className="cardViewTitle horizontalCardViewTitle">
                    {title}
                </h1>
                <div className={"horizontalCardView " + internalClasses} id={title} onScroll={(event) => scrollDisplayEventHandler(event)}>
                    {children}
                    <button className="scrollButton scrollRightButton" onClick={(event) => {
                        event.target["parentNode"].scrollBy({left: vwToPx(31), top: 0, behavior: "smooth"});
                        scrollDisplayEventHandler(event);
                    }}>▶</button>
                    <button className="scrollButton scrollLeftButton" style={{display: "none"}} onLoad={(event) => scrollDisplayEventHandler(event)} onClick={(event) => {
                        event.target["parentNode"].scrollBy({left: vwToPx(-31), top: 0, behavior: "smooth"});
                        scrollDisplayEventHandler(event);
                    }}>◀</button>
                </div>
            </div>
        </>
    )
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