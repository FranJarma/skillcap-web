'use client'
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle} from "@nextui-org/react";
import { ThemeSwitcher } from './ThemeSwitcher';
import { Sidebar } from './Sidebar';
import { menuItems } from './interfaces/MenuItem';
import { scrollIntoView } from '@/helpers/index';
import { useLogo } from '@/hooks/index';

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
    <Navbar isBordered>
        <NavbarContent justify="center">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand
            className="hidden md:flex">
            {
              useLogo()
            }
          </NavbarBrand>
          <div className='hidden md:flex gap-4 min-h-full'>
            {menuItems.map((item, index) => (
              !item.button ?
              <NavbarItem className='flex border-teal-600 hover:border-b-2' key={`${item}-${index}`}>
                <Link className='text-center justify-center items-center' color="foreground" href={item.href} onClick={scrollIntoView}>
                  {item.label}
                </Link>
              </NavbarItem>
              :
              <NavbarItem className='flex items-center' key={`${item}-${index}`}>
                <Button className='uppercase ml-48' color='primary' key={`${item}-${index}`}>{item.label}</Button>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden md:block">
            <ThemeSwitcher/>
          </NavbarItem>
        </NavbarContent>
        <Sidebar/>
    </Navbar>
    </>
  )
}
