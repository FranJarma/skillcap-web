"use client";
import React, {useEffect, useState} from "react";

import {Card, CardBody, Skeleton} from "@nextui-org/react";
import Image from "next/image";
import {useInView} from "react-intersection-observer";

export const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
    }, [isLoaded]);

    const services = [
        {
            alt: "Camera Installation image",
            description:
                "Colaboramos con dueños de canchas deportivas para instalar cámaras fijas de alta calidad. Esto no solo enriquece su negocio, sino que también te brinda la oportunidad de adquirir grabaciones de tus partidos directamente desde nuestra aplicación. Puedes pagar de manera sencilla y tener acceso instantáneo.",
            img: "/CameraInstallation.jpg",
            name: "Instalación de cámaras",
        },
        {
            alt: "Mobile App image",
            description:
                "Ofrecemos un acceso en línea a tus momentos más importantes en el deporte. Ya sea que estés en la cancha de fútbol, baloncesto o paddle, capturamos cada jugada y cada gol para que puedas revisar y mejorar tu desempeño desde la comodidad de tu dispositivo.",
            img: "/MobileApp.png",
            name: "Aplicación móvil",
        },
        {
            alt: "Monthly Suscription image",
            description:
                "Para aquellos que desean entrenar aún más duro, ofrecemos una suscripción mensual que te permite utilizar nuestro servicio de manera ilimitada. Ya no tienes que preocuparte por el costo adicional cada vez que juegas.",
            img: "/MonthlySuscription.jpg",
            name: "Suscripción mensual para deportistas",
        },
        {
            alt: "Social Media image",
            description:
                "No solo queremos ayudarte a mejorar en el campo, sino también a destacarte en las redes y en tu comunidad. Ofrecemos servicios de fotografía premium para equipos y producciones de video para aquellos que buscan un toque profesional en sus partidos y eventos deportivos.",
            img: "/SocialMedia.jpg",
            name: "Marketing por redes sociales",
        },
        {
            alt: "Handling trophy image",
            description:
                "Los dueños de cancha podrán crear torneos, de tal forma que los jugadores puedan acceder a ellos e inscribirse y poder así participar de miles de beneficios y premios.",
            img: "/Trophy.jpg",
            name: "Creación de torneos",
        },
        {
            alt: "Rating image",
            description:
                "Los jugadores tendrán la posibilidad de votar mejores goles, mejores jugadas y poder así compartirlas en sus redes sociales.",
            img: "/Rating.jpg",
            name: "Votaciones",
        },
    ];
    return (
        <div ref={ref}>
            <section
                className={`flex flex-col ${inView ? "inline animate-fade animate-once animate-ease-in-out" : "invisible"} m-10 md:m-40`}
                id="services"
            >
                <section className="flex flex-col justify-center items-center gap-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-center">
                        Nuestros servicios
                    </h2>
                    <section className="grid gap-10 grid-cols-1 xl:grid-cols-2">
                        {services.map((service) => (
                            <React.Fragment key={service.name}>
                                <Card
                                    isBlurred
                                    isPressable
                                    className="border-none cursor-pointer rounded-md bg-background/60 dark:bg-foreground-100 max-w-[610px]"
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
                                                            className="object-cover min-h-fit w-screen opacity-50 hover:scale-105 duration-500 hover:opacity-100 md:h-96"
                                                            height={100}
                                                            sizes="100vw"
                                                            src={service.img}
                                                            width={100}
                                                        />
                                                    </Skeleton>
                                                    <Skeleton
                                                        isLoaded={isLoaded}
                                                    >
                                                        <h3 className="font-semibold text-foreground/90 text-2xl">
                                                            {service.name}
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
                                                            {
                                                                service.description
                                                            }
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
