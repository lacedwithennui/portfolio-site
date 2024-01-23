export function vwToPx(vw) {
    return vw * (window.innerWidth / 100)
}

export function ABlank({href, classes, children}) {
    return <a href={href} className={classes} target="_blank" rel="noreferrer">{children}</a>
}