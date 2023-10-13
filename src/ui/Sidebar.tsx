'use client'
import React from 'react'
import { menuItems } from './interfaces/MenuItem'
import { Button, Link, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Sidebar = () => {
  return (
    <NavbarMenu>
      <aside className='p-10 m-10 text-center justify-center'>
          {menuItems.map((item, index) => (
            <NavbarMenuItem className='hover:bg-white' key={`${item}-${index}`}>
              <Link
                className="w-full hover:text-black p-5"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        <NavbarMenuItem>
          <Button className='rounded-sm w-full p-5 mt-5' as={Link} color="primary" href="/videos" variant="ghost">
            Ver videos
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <ThemeSwitcher/>
        </NavbarMenuItem>
      </aside>
    </NavbarMenu>
  )
}
