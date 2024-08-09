import {Icons, renderSvg} from "@/helpers";

export const FOOTER_CONSTANTS = {
    IMPORTANT_INFO: {
        items: [
            {
                href: "privacy",
                subtitle: "Políticas de privacidad",
            },
            {
                href: "terms-and-conditions",
                subtitle: "Términos y condiciones",
            },
            {
                href: "cookies",
                subtitle: "Políticas de cookies",
            },
        ],
        title: "Información importante",
    },
    SOCIALS: {
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
        title: "Redes sociales",
    },
    WHO_WHE_ARE: {
        items: [
            {
                href: "who-we-are",
                subtitle: "Sobre nosotros",
            },
            {
                href: "services",
                subtitle: "¿Qué servicios ofrecemos?",
            },
            {
                href: "ubication",
                subtitle: "¿En dónde nos encontramos?",
            },
        ],
        title: "Nosotros",
    },
};
