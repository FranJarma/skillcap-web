"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';
import { Sun, Moon } from "./icons/index";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isSelected, setIsSelected] = useState(true);

  useEffect(() => {
    setTheme(theme ? theme : 'dark')
  }, []);

  return (
    <Switch
      defaultChecked
      className="mt-5 md:mt-0"
      isSelected={theme === 'dark' ? true : false}
      onValueChange={(isSelected) => isSelected ? setTheme('dark') : setTheme('light')}
      size="lg"
      color="default"
      startContent={<Sun />}
      endContent={<Moon />}
      onChange={(e) => (e.target as HTMLInputElement).value ? setTheme('dark') : setTheme('light') }
      title="Modo oscuro"
      value={theme}
    >
    </Switch>
  )
};