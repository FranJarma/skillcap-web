import {MouseEventHandler} from "react";

export const scrollIntoView: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
        const id = href.substring(1);
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({behavior: "smooth"});
    }
};
