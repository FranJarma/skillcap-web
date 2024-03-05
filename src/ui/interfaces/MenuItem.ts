export interface MenuItem {
    label: string;
    href?: string;
    button?: boolean;
  }

export const menuItems: MenuItem [] = [
    {
        label: "Quiénes somos",
        href: "#who-we-are"
    },
    {
        label: "Servicios",
        href: "#services"
    },
    {
        label: "Ubicación",
        href: "#ubication"
    }
];