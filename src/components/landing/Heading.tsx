"use client";
import { Button, Link } from "@nextui-org/react";
import HeadingImage from "./../../../public/HeadingImage.jpg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Icons, renderSvg } from "@/helpers";

export const Heading = () => {
  const [clients, setClients] = useState(0);
  const [countries, setCountries] = useState(0);
  const [videos, setVideos] = useState(0);

  useEffect(() => {
    if (clients < 20) {
      setTimeout(() => {
        setClients(clients + 1);
      }, 400);
    }

    if (countries < 3) {
      setTimeout(() => {
        setCountries(countries + 1);
      }, 500);
    }

    if (videos < 2000) {
      setTimeout(() => {
        setVideos(videos + 1);
      }, 1);
    }
  }, [clients, countries, videos]);

  return (
    <>
      <section className="fixed z-10 bottom-5 right-5">
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=543874450922&text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20Skillcap!%20%F0%9F%93%B8"
        >
          {renderSvg(Icons.WhatsApp, 60, 60)}
        </Link>
      </section>
      <section className="flex justify-between bg-foreground-50 h-screen">
        <article className="flex flex-col justify-center items-center gap-10 m-20 text-clip tracking-normal">
          <h2 className="text-4xl lg:text-5xl !leading-snug font-bold tracking-wide">
            ¿En búsqueda de mejorar tu{" "}
            <span className="bg-teal-700 text-white">
              rendimiento deportivo?
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-foreground-600 text-justify antialiased">
            Capturamos momentos cruciales y jugadas destacadas para que mejores
            tu desempeño como deportista.
          </p>
          <Button
            size="lg"
            className="rounded-md p-7 mt-5 text-xl"
            as={Link}
            color="primary"
            href="/videos"
          >
            Ver videos
          </Button>
        </article>
        <picture className="hidden lg:block aspect-square">
          <Image
            className="opacity-60 h-full"
            src={HeadingImage}
            alt="Freepik image"
          />
        </picture>
      </section>
      <section className="flex p-12 bg-foreground text-foreground-200 justify-evenly">
        <article className="w-12">
          <h3 className="text-3xl hover:text-teal-700 cursor-pointer">
            +{clients}
          </h3>
          <p>Clientes satisfechos</p>
        </article>
        <article className="w-12">
          <h3 className="text-3xl hover:text-teal-700 cursor-pointer tabular-nums">
            {countries}
          </h3>
          <p>Países</p>
        </article>
        <article className="w-12">
          <h3 className="text-3xl hover:text-teal-700 cursor-pointer tabular-nums">
            +{videos}
          </h3>
          <p>Videos</p>
        </article>
      </section>
    </>
  );
};
