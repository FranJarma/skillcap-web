import React, {ReactNode} from "react";

import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";

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
