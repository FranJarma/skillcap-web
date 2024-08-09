"use client";

import {useEffect} from "react";

import {Switch} from "@nextui-org/react";
import {useTheme} from "next-themes";

import {Sun, Moon} from "@/components/ui/Icons";

export function ThemeSwitcher() {
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setTheme(theme ? theme : "dark");
    }, [theme, setTheme]);

    return (
        <Switch
            defaultChecked
            color="default"
            endContent={<Moon />}
            isSelected={theme === "dark" ? true : false}
            size="lg"
            startContent={<Sun />}
            title="Modo oscuro"
            value={theme}
            onChange={(e) =>
                (e.target as HTMLInputElement).value
                    ? setTheme("dark")
                    : setTheme("light")
            }
            onValueChange={(isSelected) =>
                isSelected ? setTheme("dark") : setTheme("light")
            }
        ></Switch>
    );
}
