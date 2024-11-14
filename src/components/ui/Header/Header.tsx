"use client";
import * as React from "react";

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
import {scrollIntoView} from "@/helpers/";
import {useLogo} from "@/hooks/";

import {HeaderItems} from "./HeaderItems";
import {HeaderProps} from "./HeaderTypes";

const Header: React.FC<HeaderProps> = ({showHeaderItems = true}) => {
    const [isMenuOpen] = React.useState(false);
    const logo = useLogo();

    return (
        <React.Fragment>
            <Navbar isBordered>
                <NavbarContent justify="center">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="min-[1024px]:hidden"
                    />
                    <NavbarBrand className="hidden md:block">
                        {logo}
                    </NavbarBrand>
                    {showHeaderItems && <HeaderItems />}
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="flex gap-4">
                        {showHeaderItems && (
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
        </React.Fragment>
    );
};

export default Header;
