export interface MenuItem {
    button?: boolean;
    href?: string;
    label: string;
    target?: string;
    toPage?: string;
  }

export const menuItems: MenuItem [] = [
    {
        label: "Quiénes somos",
        href: "#who-we-are",
        toPage: "who-we-are"
    },
    {
        label: "Servicios",
        href: "#services",
        toPage: "services"
    },
    {
        label: "Ubicación",
        href: "#ubication",
        toPage: "ubication"
    }
];