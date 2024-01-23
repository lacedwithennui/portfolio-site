import React from "react";

interface NavButtonProps {
    title?: string;
    href?: string;
    id?: string;
    imgid?: string;
    img?: string;
    alt?: string;
    lastchild?: boolean;
    onclick?: any;
}

function NavButton({title, href, id, imgid, img, alt, lastchild, onclick}: NavButtonProps) {
    if(img) {
        return (
            <a href={href} className="navButton" id={id} onClick={onclick}><img src={img} className="navImage" alt={alt} id={imgid} /> <span className="navButtonTitle">{title}</span></a>
        )
    }
    else {
        return (
            <a className={lastchild ? "navButton lastNavItem" : "navButton"} href={href}><div className="navButtonTitle">{title}</div></a>
        )
    }
}

function expandMenu() {
    let container = document.querySelector("#headerButtons") as HTMLElement;
    if(!container.hasAttribute("style")) {
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.position = "absolute";
        container.style.top = "5vh";
        container.style.right = "0px";
        container.style.height = container.children.length * 5 + "vh"
        container.style.backgroundColor = "#fcfcfc"
        container.style.zIndex = "1";
        container.style.alignItems = "center";
        let children = container.querySelectorAll("a");
        children.forEach((child) => {
            child.style.width = "calc(100% - 15px)";
            child.style.justifyContent = "center";
        })
    }
    else {
        container.removeAttribute("style")
    }
}

export default function Header() {
    return (
        <div id="header">
            <NavButton href="/" id="navLogo" title="Hazel Belmont" />
            <div id="rightAlignedChildren" className="headerChild">
                <div id="headerButtons">
                    <NavButton title="Home" href="/" id="home" />
                    <NavButton title="Portfolio" href="/portfolio" id="portfolio" />
                    <NavButton title="Contact" href="/contact" id="contact" lastchild />
                </div>
                <NavButton img="https://www.svgrepo.com/show/509382/menu.svg" alt="menu button" imgid="menuImg" id="menuButton" onclick={() => expandMenu()} />
            </div>
        </div>
    )
}