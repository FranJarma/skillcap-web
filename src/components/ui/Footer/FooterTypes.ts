export type FooterItem = {
    href?: string;
    icon?: React.JSX.Element | null;
    subtitle?: string;
    targetBlank?: boolean;
};

export type FooterList = {
    items: FooterItem[];
};
