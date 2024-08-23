"use client";
import React from "react";

import {Accordion, AccordionItem} from "@nextui-org/react";

import {FOOTER_CONSTANTS} from "./FooterConstants";
import {FooterListItem} from "./FooterListItem";

export const FooterMobile = () => {
    return (
        <Accordion>
            {Object.entries(FOOTER_CONSTANTS).map(([key, section]) => (
                <AccordionItem
                    key={key}
                    aria-label={section.title}
                    title={section.title}
                >
                    <FooterListItem items={section.items} />
                </AccordionItem>
            ))}
        </Accordion>
    );
};
