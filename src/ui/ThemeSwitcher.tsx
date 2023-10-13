"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <Switch
      className="mt-5 md:mt-0"
      onValueChange={() => {
        setIsDarkMode(!isDarkMode)
        setTheme(!isDarkMode ? "dark" : "light")
      }}
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      title="Modo oscuro"
    >
    </Switch>
  )
};