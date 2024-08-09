import React from "react";

import Image from "next/image";
import Link from "next/link";
import {useTheme} from "next-themes";

export const useLogo = (width = 100, height = 100) => {
    const {theme} = useTheme();
    const LogoWhite = () => {
        return (
            <Link href="/">
                <Image
                    priority
                    alt="Logo Skillcap"
                    height={height}
                    src="/LogoWhite.png"
                    width={width}
                />
            </Link>
        );
    };

    const Logo = () => {
        return (
            <Link href="/">
                <Image
                    priority
                    alt="Logo Skillcap"
                    height={height}
                    src="/Logo.png"
                    width={width}
                />
            </Link>
        );
    };
    return <>{theme === "light" ? <Logo /> : <LogoWhite />}</>;
};
