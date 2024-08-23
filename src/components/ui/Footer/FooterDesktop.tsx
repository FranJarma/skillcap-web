"use client";
import React from "react";

import {FOOTER_CONSTANTS} from "./FooterConstants";
import {FooterListItem} from "./FooterListItem";

export const FooterDesktop = () => {
    return (
        <section className="grid grid-cols-3 text-foreground-900 gap-10 justify-items-center">
            {Object.entries(FOOTER_CONSTANTS).map(([key, section]) => (
                <ul key={key}>
                    <h2 className="text-2xl">
                        <span className="border-b-2 border-teal-500">
                            {section.title}
                        </span>
                    </h2>
                    <FooterListItem items={section.items} />
                </ul>
            ))}
        </section>
    );
};
