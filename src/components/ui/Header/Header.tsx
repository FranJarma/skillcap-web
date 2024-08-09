"use client";
import React from "react";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle,
} from "@nextui-org/react";

import {Sidebar, ThemeSwitcher} from "@/components/ui";
import {menuItems} from "@/components/ui/MenuItem/MenuItem";
import {scrollIntoView} from "@/helpers/";
import {useLogo} from "@/hooks/";

import {HeaderProps} from "./HeaderTypes";

export const Header = ({children, showMenuItems = true}: HeaderProps) => {
    const [isMenuOpen] = React.useState(false);

    return (
        <>
            <Navbar isBordered>
                <NavbarContent justify="center">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="min-[1024px]:hidden"
                    />
                    <NavbarBrand className="hidden md:block">
                        {useLogo()}
                    </NavbarBrand>
                    {showMenuItems && (
                        <div className="hidden min-[1024px]:flex gap-4 min-h-full">
                            <div className="hidden min-[1024px]:flex gap-4 min-h-full">
                                {menuItems.map((item, index) => (
                                    <NavbarItem
                                        key={`${item}-${index}`}
                                        className="flex border-teal-600 hover:border-b-2"
                                    >
                                        <Link
                                            className="text-center justify-center items-center"
                                            color="foreground"
                                            href={item.href}
                                            onClick={scrollIntoView}
                                        >
                                            {item.label}
                                        </Link>
                                    </NavbarItem>
                                ))}
                            </div>
                        </div>
                    )}
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="flex gap-4">
                        {showMenuItems && (
                            <Button color="primary">
                                <Link
                                    className="text-foreground-50"
                                    href="#cta"
                                    type="button"
                                    onClick={scrollIntoView}
                                >
                                    Quiero contratar el servicio
                                </Link>
                            </Button>
                        )}
                        <ThemeSwitcher />
                    </NavbarItem>
                </NavbarContent>
                <Sidebar />
            </Navbar>
            {children}
        </>
    );
};
