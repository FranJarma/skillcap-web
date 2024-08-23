"use client";
import React from "react";

import Link from "next/link";

import {FooterItem} from "./FooterTypes";

export const FooterListItem: React.FC<{items: FooterItem[]}> = ({items}) => {
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
