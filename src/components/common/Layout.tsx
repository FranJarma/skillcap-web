import React, { ReactNode } from "react";
import { Seo, SeoComponent } from "./Seo";
import { Main } from "./Main";
import { Footer, Header } from "@/ui";

interface LayoutProps {
  children?: ReactNode;
  seo?: Seo;
}
export const Layout = ({ children, seo }: LayoutProps) => {
  return (
    <React.Fragment>
      <SeoComponent title={seo?.title} description={seo?.description} />
      <Header />
      <h1 className="hidden">{seo?.title}</h1>
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
};
