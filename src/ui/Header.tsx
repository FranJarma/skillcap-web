'use client'
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Image from 'next/image';

export const Header = () => {
  const LogoWhite = () => {
    return (
      <Link href='/'>
        <Image
        width={100}
        height={100}
        src="/LogoWhite.png"
        alt="Logo Skillcap"/>
      </Link>
    )
  }

  const Logo = () => {
    return (
      <Link href='/'>
        <Image
        width={100}
        height={100}
        src="/Logo.png"
        alt="Logo Skillcap"/>
      </Link>
    )
  }
  interface MenuItem {
    label: string;
    href: string;
  }
  const menuItems: MenuItem [] = [
    {
      label: "Quiénes somos",
      href: "#who-we-are"
    },
    {
      label: "Servicios",
      href: "#services"
    },
    {
      label: "Clientes",
      href: "#clients"
    },
    {
      label: "Ubicación",
      href: "#ubication"
    },
    {
      label: "Testimonios",
      href: "#testimonials"
    }
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
    <Navbar shouldHideOnScroll>
        <NavbarContent justify="center">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <LogoWhite/>
          </NavbarBrand>
            <div className='hidden md:flex gap-4'>
              {menuItems.map((item, index) => (
              <NavbarItem key={`${item}-${index}`}>
                <Link color="foreground" href={item.href}>
                  {item.label}
                </Link>
              </NavbarItem>
              ))}
            </div>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="ghost">
              Ver videos
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
    </Navbar>
    </>
  )
}
