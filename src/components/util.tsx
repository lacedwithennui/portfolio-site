import React from "react"

export function vwToPx(vw: number) {
    return vw * (window.innerWidth / 100)
}

export function ABlank({href, classes, children}: {href: string; classes?: string; children: any}) {
    return <a href={href} className={classes} target="_blank" rel="noreferrer">{children}</a>
}

export const paths = {
    images: "/assets/images/",
    icons: "/assets/images/icons/"
}

export function until(condition: Function) {
    return new Promise<void>(resolve => {
        let interval = setInterval(() => {
            if (!condition()) return;
            clearInterval(interval);
            resolve();
        }, 400)
    })
}