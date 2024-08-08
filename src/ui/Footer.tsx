"use client";
import React from "react";
import Link from "next/link";
import { useSmallScreen } from "@/hooks/useSmallScreen";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Icons, renderSvg } from "@/helpers";
interface Item {
  href?: string;
  icon?: React.JSX.Element | null;
  subtitle?: string;
  targetBlank?: boolean;
}

interface ListItemProps {
  items: Item[];
}

const WHO_WHE_ARE = {
  title: "Nosotros",
  items: [
    {
      href: "quienes-somos",
      subtitle: "Sobre nosotros",
    },
    {
      href: "servicios",
      subtitle: "¿Qué servicios ofrecemos?",
    },
    {
      href: "ubicacion",
      subtitle: "¿En dónde nos encontramos?",
    },
  ],
};

const SOCIALS = {
  title: "Redes sociales",
  items: [
    {
      href: "https://instagram.com/Skillcap",
      icon: renderSvg(Icons.Instagram, 18, 18),
      subtitle: "Instagram",
      targetBlank: true,
    },
    {
      href: "https://tiktok.com/Skillcap",
      icon: renderSvg(Icons.Tiktok, 18, 18),
      subtitle: "Tiktok",
      targetBlank: true,
    },
    {
      href: "https://youtube.com/Skillcap",
      icon: renderSvg(Icons.Youtube, 18, 18),
      subtitle: "Youtube",
      targetBlank: true,
    },
  ],
};

const IMPORTANT_INFO = {
  title: "Información importante",
  items: [
    {
      href: "/privacidad",
      subtitle: "Políticas de privacidad",
    },
    {
      href: "terminos-y-condiciones",
      subtitle: "Términos y condiciones",
    },
    {
      href: "cookies",
      subtitle: "Políticas de cookies",
    },
  ],
};

const ListItem: React.FC<ListItemProps> = ({ items }) => {
  return (
    <section className="flex flex-col m-4 gap-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <li className="flex gap-2 list-none hover:animate-pulse animate-once animate-duration-500 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards">
            {item.icon}
            <Link
              href={item.href ?? ""}
              target={item.targetBlank ? "_blank" : ""}
            >
              {item.subtitle}
            </Link>
          </li>
        </React.Fragment>
      ))}
    </section>
  );
};

export const Footer: React.FC = () => {
  const isSmallScreen = useSmallScreen(1024);

  return (
    <React.Fragment>
      <footer className="w-100 block sticky p-10">
        {isSmallScreen ? (
          <Accordion>
            <AccordionItem
              key="1"
              aria-label={SOCIALS.title}
              title={SOCIALS.title}
            >
              <ListItem items={SOCIALS.items} />
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label={WHO_WHE_ARE.title}
              title={WHO_WHE_ARE.title}
            >
              <ListItem items={WHO_WHE_ARE.items} />
            </AccordionItem>
            <AccordionItem
              key=""
              aria-label={IMPORTANT_INFO.title}
              title={IMPORTANT_INFO.title}
            >
              <ListItem items={IMPORTANT_INFO.items} />
            </AccordionItem>
          </Accordion>
        ) : (
          <section className="grid grid-cols-3 text-foreground-900 gap-10 justify-items-center">
            <ul>
              <h2 className="text-2xl">
                <span className="border-b-2 border-teal-500">
                  {SOCIALS.title}
                </span>
              </h2>
              <ListItem items={SOCIALS.items} />
            </ul>
            <ul>
              <h2 className="text-2xl ">
                <span className="border-b-2 border-teal-500">
                  {WHO_WHE_ARE.title}
                </span>
              </h2>
              <ListItem items={WHO_WHE_ARE.items} />
            </ul>
            <ul>
              <h2 className="text-2xl">
                <span className="border-b-2 border-teal-500">
                  {IMPORTANT_INFO.title}
                </span>
              </h2>
              <ListItem items={IMPORTANT_INFO.items} />
            </ul>
          </section>
        )}
        <section className="flex flex-row text-center justify-center p-10">
          <h3>
            Copyright Skillcap {new Date().getFullYear()} - Todos los derechos
            reservados
          </h3>
        </section>
      </footer>
    </React.Fragment>
  );
};
