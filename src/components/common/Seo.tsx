import Head from "next/head";
import React from "react";

export interface Seo {
    title?: string;
    description?: string;
}

export const SeoComponent = (props: Seo) => {
    return (
        <React.Fragment>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description}></meta>
            </Head>
        </React.Fragment>
    );
};
