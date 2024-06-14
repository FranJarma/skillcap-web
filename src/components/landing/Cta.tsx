"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import FootballField from "public/FootballField.jpg";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { Check } from "@/ui/icons/index";
import { Control, Form, FormData, Type } from "../ui";
export const Cta = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [infoSent, setInfoSent] = useState(false);

  const handleinfoSent = () => {
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
        id="cta"
        className={`flex bg-foreground-50 md:min-h-[1000px] ${inView ? "inline animate-fade animate-once animate-ease-in-out" : "invisible"}`}
      >
        <picture className="hidden lg:block aspect-video">
          <Image
            className="opacity-60 h-full"
            width={1200}
            src={FootballField}
            alt="master1305 freepik image"
          />
        </picture>
        <section className="flex flex-col justify-center items-center gap-10 m-20 text-clip tracking-normal min-h-full">
          <h2 className="text-3xl !leading-snug md:text-5xl font-bold tracking-wide">
            ¿Quieres implementar{" "}
            <span className="bg-teal-700 text-white">Skillcap</span> en tu
            negocio?
          </h2>
          {infoSent ? (
            <section
              className={`w-full p-14 animate-fade animate-once animate-ease-in-out`}
            >
              <p className="text-lg flex justify-center align-center text-center gap-5">
                <Check width={25} height={25} />
                Recibimos tus datos, nos comunicaremos muy pronto
              </p>
            </section>
          ) : (
            <React.Fragment>
              <p className="text-xl md:text-2xl text-foreground-600 text-justify antialiased">
                Déjanos tus datos y uno de nuestros operadores se pondrá en
                contacto.
              </p>
              <Form data={formData} />
              <Button
                className="w-full"
                isDisabled={infoSent}
                color="primary"
                onClick={handleinfoSent}
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
