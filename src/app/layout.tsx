import "./globals.css";
import type {Metadata} from "next";

import {Exo} from "next/font/google";

import {Providers} from "./providers";

const exo = Exo({subsets: ["latin"]});

export const metadata: Metadata = {
    description:
        "Capturamos momentos cruciales y jugadas destacadas para que mejores tu desempeño como deportista",
    title: "Skillcap - Tu solución para mejorar tu desempeño deportivo",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html className="dark" lang="es">
            <body className={exo.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
