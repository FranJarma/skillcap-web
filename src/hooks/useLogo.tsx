import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const useLogo = (width = 100, height = 100) => {
  const { theme } = useTheme();
  const LogoWhite = () => {
    return (
      <Link href="/">
        <Image
          priority
          width={width}
          height={height}
          src="/LogoWhite.png"
          alt="Logo Skillcap"
        />
      </Link>
    );
  };

  const Logo = () => {
    return (
      <Link href="/">
        <Image
          priority
          width={width}
          height={height}
          src="/Logo.png"
          alt="Logo Skillcap"
        />
      </Link>
    );
  };
  return <>{theme === "light" ? <Logo /> : <LogoWhite />}</>;
};
