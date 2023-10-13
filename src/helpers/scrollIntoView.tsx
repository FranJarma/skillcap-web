import { MouseEventHandler } from "react"

export const scrollIntoView: MouseEventHandler<HTMLAnchorElement> = (e) => {
  e.preventDefault();
  const id = e.currentTarget.getAttribute("href").substring(1);
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};