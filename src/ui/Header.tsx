"use client";
import React, { ReactNode } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  useDisclosure,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Sidebar } from "./Sidebar";
import { menuItems } from "./interfaces/MenuItem";
import { scrollIntoView } from "@/helpers/index";
import { useLogo } from "@/hooks/index";

interface HeaderProps {
  children?: ReactNode;
  showMenuItems?: boolean;
}

export const Header = ({ children, showMenuItems = true }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Navbar isBordered>
        <NavbarContent justify="center">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="min-[1024px]:hidden"
          />
          <NavbarBrand className="hidden md:block">{useLogo()}</NavbarBrand>
          {showMenuItems && (
            <div className="hidden min-[1024px]:flex gap-4 min-h-full">
              <div className="hidden min-[1024px]:flex gap-4 min-h-full">
                {menuItems.map((item, index) => (
                  <NavbarItem
                    className="flex border-teal-600 hover:border-b-2"
                    key={`${item}-${index}`}
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
                  type="button"
                  className="text-foreground-50"
                  href="#cta"
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
