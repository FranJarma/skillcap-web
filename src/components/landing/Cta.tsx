"use client";

import React, {useMemo, useState} from "react";

import {Button} from "@nextui-org/react";
import Image from "next/image";
import {useInView} from "react-intersection-observer";

import {Form} from "@/components/ui";
import {Control, FormData, Type} from "@/components/ui/Form/";
import {Check} from "@/components/ui/Icons/";

export const Cta = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const [infoSent, setInfoSent] = useState(false);

    const handleInfoSet = () => {
        setInfoSent(true);
    };

    const formData: FormData[] = useMemo(
        () => [
            {
                className: "w-full",
                control: Control.Input,
                label: "Nombre Completo",
                name: "fullName",
                placeholder: "Ej: John Doe",
                required: true,
                type: Type.Text,
            },
            {
                className: "w-full",
                control: Control.Input,
                label: "N° Teléfono",
                name: "phoneNumber",
                placeholder: "Ej: +543874450922",
                required: true,
                type: Type.Number,
            },
            {
                className: "w-full",
                control: Control.Input,
                label: "Cantidad de canchas",
                name: "fieldsNumber",
                type: Type.Number,
            },
            {
                className: "w-full",
                control: Control.Input,
                label: "Cantidad de cámaras",
                name: "camerasNumber",
                type: Type.Number,
            },
        ],
        []
    );

    return (
        <div ref={ref}>
            <section
                className={`flex bg-foreground-50 md:min-h-[1000px] ${inView ? "inline animate-fade animate-once animate-ease-in-out" : "invisible"}`}
                id="cta"
            >
                <picture className="hidden lg:block aspect-video">
                    <Image
                        alt="master1305 freepik image"
                        className="opacity-60 h-full"
                        height={1000}
                        src="/FootballField.jpg"
                        width={1200}
                    />
                </picture>
                <section className="flex flex-col justify-center items-center gap-10 m-20 text-clip tracking-normal min-h-full">
                    <h2 className="text-3xl !leading-snug md:text-5xl font-bold tracking-wide">
                        ¿Quieres implementar{" "}
                        <span className="bg-teal-700 text-white">Skillcap</span>{" "}
                        en tu negocio?
                    </h2>
                    {infoSent ? (
                        <section
                            className={`w-full p-14 animate-fade animate-once animate-ease-in-out`}
                        >
                            <p className="text-lg flex justify-center align-center text-center gap-5">
                                <Check height={25} width={25} />
                                Recibimos tus datos, nos comunicaremos muy
                                pronto
                            </p>
                        </section>
                    ) : (
                        <React.Fragment>
                            <p className="text-xl md:text-2xl text-foreground-600 text-justify antialiased">
                                Déjanos tus datos y uno de nuestros operadores
                                se pondrá en contacto.
                            </p>
                            <Form data={formData} />
                            <Button
                                className="w-full"
                                color="primary"
                                isDisabled={infoSent}
                                onClick={handleInfoSet}
                            >
                                Enviar
                            </Button>
                        </React.Fragment>
                    )}
                </section>
            </section>
        </div>
    );
};
