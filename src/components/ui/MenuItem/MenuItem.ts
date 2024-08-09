export type MenuItem = {
    button?: boolean;
    href?: string;
    label: string;
    target?: string;
    toPage?: string;
};

export const menuItems: MenuItem[] = [
    {
        href: "#who-we-are",
        label: "Quiénes somos",
        toPage: "who-we-are",
    },
    {
        href: "#services",
        label: "Servicios",
        toPage: "servicios",
    },
    {
        href: "#ubication",
        label: "Ubicación",
        toPage: "ubicacion",
    },
];
