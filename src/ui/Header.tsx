'use client'
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle} from "@nextui-org/react";
import { ThemeSwitcher } from './ThemeSwitcher';
import { Sidebar } from './Sidebar';
import { menuItems } from './interfaces/MenuItem';
import { scrollIntoView } from '@/helpers/scrollIntoView';
import { useLogo } from '@/hooks/useLogo';

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
    <Navbar isBordered shouldHideOnScroll>
        <NavbarContent justify="center">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            {
              useLogo()
            }
          </NavbarBrand>
            <div className='hidden md:flex gap-4'>
              {menuItems.map((item, index) => (
              <NavbarItem className='hover:border-b-2' key={`${item}-${index}`}>
                <Link color="foreground" href={item.href} onClick={scrollIntoView}>
                  {item.label}
                </Link>
              </NavbarItem>
              ))}
            </div>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden md:block">
            <ThemeSwitcher/>
          </NavbarItem>
          <NavbarItem className="hidden md:block">
            <Button className='rounded-sm' as={Link} color="primary" href="/videos" variant="ghost">
              Ver videos
            </Button>
          </NavbarItem>
        </NavbarContent>
        <Sidebar/>
    </Navbar>
    </>
  )
}
