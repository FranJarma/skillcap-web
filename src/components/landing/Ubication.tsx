"use client";
import React from "react";

import Image from "next/image";
import {useInView} from "react-intersection-observer";

export const Ubication = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <div ref={ref}>
            <section
                className={`flex flex-col ${inView ? "inline animate-fade animate-once animate-ease-in-out" : "invisible"} m-10 md:m-40`}
                id="ubication"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center">
                    Ubicación
                </h2>
                <Image
                    alt="Album cover"
                    className="rounded-2xl hover:scale-105 duration-500 mt-10 object-cover flex justify-center items-center text-center"
                    height={900}
                    src="/WorldMap.png"
                    width={1600}
                />
            </section>
        </div>
    );
};
