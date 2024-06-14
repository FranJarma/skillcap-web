"use client";
import React from "react";
import { menuItems } from "./interfaces/MenuItem";
import { Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

export const Sidebar = () => {
  return (
    <NavbarMenu>
      <aside className="p-10 m-10 text-center justify-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="hover:bg-primary" key={`${item}-${index}`}>
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
