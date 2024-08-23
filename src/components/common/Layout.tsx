import React, {ReactNode} from "react";

import {Footer, Header} from "@/components/ui";

type LayoutProps = {
    children?: ReactNode;
    showHeaderItems?: boolean;
};
export const Layout = ({children, showHeaderItems}: LayoutProps) => {
    return (
        <React.Fragment>
            <Header showHeaderItems={showHeaderItems} />
            <main className="min-h-screen m-10">{children}</main>
            <Footer />
        </React.Fragment>
    );
};
