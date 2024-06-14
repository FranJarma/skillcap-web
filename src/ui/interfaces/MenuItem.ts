export interface MenuItem {
  button?: boolean;
  href?: string;
  label: string;
  target?: string;
  toPage?: string;
}

export const menuItems: MenuItem[] = [
  {
    label: "Quiénes somos",
    href: "#quienes-somos",
    toPage: "quienes-somos",
  },
  {
    label: "Servicios",
    href: "#servicios",
    toPage: "servicios",
  },
  {
    label: "Ubicación",
    href: "#ubicacion",
    toPage: "ubicacion",
  },
];
