export type FooterItem = {
    href?: string;
    icon?: React.JSX.Element | null;
    subtitle?: string;
    targetBlank?: boolean;
};

export type FooterItems = {
    items: FooterItem[];
};

export type FooterMobileProps = {
    title: string;
    items: FooterItems["items"];
    id: string;
};

export type FooterDesktopProps = {
    title: string;
    items: FooterItems["items"];
};
