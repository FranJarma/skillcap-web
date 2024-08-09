"use client";

import React, {useState} from "react";

import {Card, CardBody, Skeleton} from "@nextui-org/react";
import Image from "next/image";
import {useInView} from "react-intersection-observer";

export const Clients = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const [isLoaded, setIsLoaded] = useState(false);

    setTimeout(() => {
        setIsLoaded(true);
    }, 5000);

    const clients = [
        {
            address: "Av. del Bicentenario de la Batalla de Salta 2500, Salta",
            imageSrc: "/ClubNorte.png",
            name: "Club Norte",
        },
        {
            address: "Los Alamos s/n, Salta",
            imageSrc: "/IlCalcio.png",
            name: "Il Calcio",
        },
        {
            address: "Los Cebiles 274, Salta",
            imageSrc: "/Sporting.png",
            name: "Sporting",
        },
    ];

    return (
        <div ref={ref}>
            <section
                className={`flex flex-col ${inView ? "inline animate-fade animate-once animate-ease-in-out" : "hidden"} md:flex-row justify-between m-20`}
                id="clients"
            >
                <section className="flex flex-col justify-center items-center gap-10 md:m-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-center">
                        Nuestros clientes
                    </h2>
                    <section>
                        {clients.map((client) => (
                            <React.Fragment key={client.name}>
                                <Card
                                    isBlurred
                                    className="border-none bg-background/60 dark:bg-foreground-100 max-w-[610px]"
                                    shadow="sm"
                                >
                                    <CardBody>
                                        <section className="flex flex-col col-span-6 md:col-span-8">
                                            <section className="flex justify-between items-start">
                                                <section className="flex flex-col gap-5">
                                                    <Skeleton
                                                        isLoaded={isLoaded}
                                                    >
                                                        <Image
                                                            alt="Album cover"
                                                            className="rounded-2xl opacity-50 hover:scale-105 duration-500 hover:opacity-100"
                                                            height={1000}
                                                            src={
                                                                client.imageSrc
                                                            }
                                                            width={760}
                                                        />
                                                    </Skeleton>
                                                    <Skeleton
                                                        isLoaded={isLoaded}
                                                    >
                                                        <h3 className="font-semibold text-foreground/90 text-2xl">
                                                            {client.name}
                                                        </h3>
                                                    </Skeleton>
                                                    <Skeleton
                                                        isLoaded={isLoaded}
                                                    >
                                                        <hr className="w-6/12" />
                                                    </Skeleton>
                                                    <Skeleton
                                                        isLoaded={isLoaded}
                                                    >
                                                        <p className="text-sm font-medium mt-2 text-justify">
                                                            {client.address}
                                                        </p>
                                                    </Skeleton>
                                                </section>
                                            </section>
                                        </section>
                                    </CardBody>
                                </Card>
                            </React.Fragment>
                        ))}
                    </section>
                </section>
            </section>
        </div>
    );
};
