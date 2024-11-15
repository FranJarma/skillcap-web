"use client";
import React from "react";

import {Button} from "@nextui-org/react";
import Link from "next/link";
import {useInView} from "react-intersection-observer";

export const WhoWeAre = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div ref={ref}>
            <section
                className={`flex flex-col justify-items-center ${inView ? "inline animate-fade animate-once animate-ease-in-out" : "invisible"} md:flex-row bg-foreground-50`}
                id="who-we-are"
            >
                <section className="flex flex-col gap-10 text-clip m-10 md:m-48">
                    <h2 className="text-4xl lg:text-5xl !leading-snug font-bold">
                        Somos{" "}
                        <span className="bg-teal-700 text-white">Skillcap</span>{" "}
                        la solución para tu rendimiento deportivo.
                    </h2>
                    <p className="text-xl lg:text-2xl text-foreground-600 text-justify antialiased">
                        No solo nos enfocamos en tu desempeño en el campo, sino
                        también en cómo te presentas ante el mundo. Queremos que
                        tu imagen y la de tu equipo brillen tanto como tus
                        habilidades. Somos jóvenes, amigables y siempre estamos
                        a tu lado para ofrecerte el apoyo visual que necesitas.
                    </p>
                    <Button
                        as={Link}
                        className="rounded-sm p-8 text-sm md:text-xl"
                        color="primary"
                        href="/who-we-are"
                    >
                        Más acerca de nosotros
                    </Button>
                </section>
            </section>
        </div>
    );
};
