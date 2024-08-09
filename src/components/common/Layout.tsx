import React, {ReactNode} from "react";

import {Footer, Header} from "@/components/ui";

import {Main} from "./Main";
import {Seo, SeoComponent} from "./Seo";

interface LayoutProps {
    children?: ReactNode;
    seo?: Seo;
}
export const Layout = ({children, seo}: LayoutProps) => {
    return (
        <React.Fragment>
            <SeoComponent description={seo?.description} title={seo?.title} />
            <Header />
            <h1 className="hidden">{seo?.title}</h1>
            <Main>{children}</Main>
            <Footer />
        </React.Fragment>
    );
};
