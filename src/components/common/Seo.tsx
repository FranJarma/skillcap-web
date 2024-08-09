import React from "react";

import Head from "next/head";

export interface Seo {
    title?: string;
    description?: string;
}

export const SeoComponent = (props: Seo) => {
    return (
        <React.Fragment>
            <Head>
                <title>{props.title}</title>
                <meta content={props.description} name="description"></meta>
            </Head>
        </React.Fragment>
    );
};
