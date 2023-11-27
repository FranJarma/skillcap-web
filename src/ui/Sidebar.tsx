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
            !item.button ?
            <NavbarMenuItem className='hover:bg-primary' key={`${item}-${index}`}>
              <Link
                className="w-full p-5 hover:text-primary-foreground"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          : <Button className='mt-10 uppercase' color='primary' key={`${item}-${index}`}>{item.label}</Button>
          ))}
        <NavbarMenuItem>
          <ThemeSwitcher/>
        </NavbarMenuItem>
      </aside>
    </NavbarMenu>
  )
}
