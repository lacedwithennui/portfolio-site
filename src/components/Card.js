import { vwToPx } from "./util";

export default function Card({title, titleLink, icons, children, cardOutButton}) {
    // for(let icon in icons) {
    //     icon.className += "cardTitleImage";
    // }
    return (
        <div className="card">
            <div className="cardTitleContainer"><h1 className="cardTitle">{title}{icons}</h1>{cardOutButton}</div>
            <p className="cardMainTextContent">{children}</p>
        </div>
    );
}

export function CardOutButton({imgSrc, href, children}) {
    return(
        <a href={href} className="cardOutButtonA" target="_blank" rel="noreferrer"><div className="cardOutButton"><img src={imgSrc} alt="" className="cardOutButtonImg" />{children}</div></a>
    );
}

export function HorizontalCardView({title, children, containerClasses, internalClasses}) {
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
                        event.target.parentNode.scrollBy({left: vwToPx(31), top: 0, behavior: "smooth"});
                        scrollDisplayEventHandler(event);
                    }}>▶</button>
                    <button className="scrollButton scrollLeftButton" style={{display: "none"}} onLoad={(event) => scrollDisplayEventHandler(event)} onClick={(event) => {
                        event.target.parentNode.scrollBy({left: vwToPx(-31), top: 0, behavior: "smooth"});
                        scrollDisplayEventHandler(event);
                    }}>◀</button>
                </div>
            </div>
        </>
    )
}

function scrollDisplayEventHandler(event) {
    let cardView;
    if(event.type === "scroll") {
        cardView = event.target;
    }
    else if(event.type === "click") {
        cardView = event.target.parentNode;
    }
    else if(event.type === "load") {
        for(let i = 0; i < document.querySelectorAll(".horizontalCardView").length; i++) {
            let cardViewFromAll = document.querySelectorAll(".horizontalCardView").item(i);
            scrollButtonConditionalDisplay(cardViewFromAll);
        }
        cardView = document.querySelector(".horizontalCardView")
    }
    scrollButtonConditionalDisplay(cardView);
}

function scrollButtonConditionalDisplay(cardView) {
    if(cardView.scrollLeft <= vwToPx(3)) {
        cardView.querySelector(".scrollLeftButton").style.display = "none";
        cardView.querySelector(".scrollRightButton").style.display = "flex";
    }
    if(cardView.scrollLeft >= vwToPx(3)) {
        cardView.querySelector(".scrollLeftButton").style.display = "flex";
        cardView.querySelector(".scrollRightButton").style.display = "flex";
    }
    if(cardView.scrollLeft >= (cardView.scrollWidth - cardView.clientWidth) - vwToPx(3)) {
        cardView.querySelector(".scrollLeftButton").style.display = "flex";
        cardView.querySelector(".scrollRightButton").style.display = "none";
    }
}