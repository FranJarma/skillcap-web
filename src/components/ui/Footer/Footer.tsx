"use client";
import React from "react";

import {Accordion, AccordionItem} from "@nextui-org/react";
import Link from "next/link";

import {useSmallScreen} from "@/hooks/useSmallScreen";

import {FOOTER_CONSTANTS} from "./FooterConstants";
import {FooterList} from "./FooterTypes";

const ListItem: React.FC<FooterList> = ({items}) => {
    return (
        <section className="flex flex-col m-4 gap-4">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <li className="flex gap-2 list-none hover:animate-pulse animate-once animate-duration-500 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards">
                        {item.icon}
                        <Link
                            href={item.href ?? ""}
                            target={item.targetBlank ? "_blank" : ""}
                        >
                            {item.subtitle}
                        </Link>
                    </li>
                </React.Fragment>
            ))}
        </section>
    );
};

export const Footer: React.FC = () => {
    const isSmallScreen = useSmallScreen(1024);

    return (
        <React.Fragment>
            <footer className="w-100 block sticky p-10">
                {isSmallScreen ? (
                    <Accordion>
                        <AccordionItem
                            key="1"
                            aria-label={FOOTER_CONSTANTS.SOCIALS.title}
                            title={FOOTER_CONSTANTS.SOCIALS.title}
                        >
                            <ListItem items={FOOTER_CONSTANTS.SOCIALS.items} />
                        </AccordionItem>
                        <AccordionItem
                            key="2"
                            aria-label={FOOTER_CONSTANTS.WHO_WHE_ARE.title}
                            title={FOOTER_CONSTANTS.WHO_WHE_ARE.title}
                        >
                            <ListItem
                                items={FOOTER_CONSTANTS.WHO_WHE_ARE.items}
                            />
                        </AccordionItem>
                        <AccordionItem
                            key=""
                            aria-label={FOOTER_CONSTANTS.IMPORTANT_INFO.title}
                            title={FOOTER_CONSTANTS.IMPORTANT_INFO.title}
                        >
                            <ListItem
                                items={FOOTER_CONSTANTS.IMPORTANT_INFO.items}
                            />
                        </AccordionItem>
                    </Accordion>
                ) : (
                    <section className="grid grid-cols-3 text-foreground-900 gap-10 justify-items-center">
                        <ul>
                            <h2 className="text-2xl">
                                <span className="border-b-2 border-teal-500">
                                    {FOOTER_CONSTANTS.SOCIALS.title}
                                </span>
                            </h2>
                            <ListItem items={FOOTER_CONSTANTS.SOCIALS.items} />
                        </ul>
                        <ul>
                            <h2 className="text-2xl ">
                                <span className="border-b-2 border-teal-500">
                                    {FOOTER_CONSTANTS.WHO_WHE_ARE.title}
                                </span>
                            </h2>
                            <ListItem
                                items={FOOTER_CONSTANTS.WHO_WHE_ARE.items}
                            />
                        </ul>
                        <ul>
                            <h2 className="text-2xl">
                                <span className="border-b-2 border-teal-500">
                                    {FOOTER_CONSTANTS.IMPORTANT_INFO.title}
                                </span>
                            </h2>
                            <ListItem
                                items={FOOTER_CONSTANTS.IMPORTANT_INFO.items}
                            />
                        </ul>
                    </section>
                )}
                <section className="flex flex-row text-center justify-center p-10">
                    <p>
                        Copyright Skillcap {new Date().getFullYear()} - Todos
                        los derechos reservados
                    </p>
                </section>
            </footer>
        </React.Fragment>
    );
};
