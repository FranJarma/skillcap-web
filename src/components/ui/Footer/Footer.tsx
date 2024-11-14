"use client";
import React from "react";

import {useSmallScreen} from "@/hooks/useSmallScreen";

import {FooterDesktop} from "./FooterDesktop";
import {FooterMobile} from "./FooterMobile";

const Footer: React.FC = () => {
    const isSmallScreen = useSmallScreen(1024);

    return (
        <React.Fragment>
            <footer className="w-100 block sticky p-10">
                {isSmallScreen ? <FooterMobile /> : <FooterDesktop />}
                <section className="flex flex-row text-center justify-center p-10">
                    <p>
                        Copyright Skillcap {new Date().getFullYear()} - Todos
                        los derechos reservados
                    </p>
                </section>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
