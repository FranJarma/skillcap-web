"use client";
import React from "react";

import {Link, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

import {menuItems} from "@/components/ui/MenuItem/MenuItem";

export const Sidebar = () => {
    return (
        <NavbarMenu>
            <aside className="p-10 m-10 text-center justify-center">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem
                        key={`${item}-${index}`}
                        className="hover:bg-primary"
                    >
                        <Link
                            className="w-full p-5 hover:text-primary-foreground"
                            href={item.toPage}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </aside>
        </NavbarMenu>
    );
};
