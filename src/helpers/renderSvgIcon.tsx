import {
  Check,
  Instagram,
  Moon,
  Sun,
  Tiktok,
  WhatsApp,
  Youtube,
} from "@/ui/icons";

interface IconComponents {
  [key: string]: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export enum Icons {
  Check = "check",
  Instagram = "instagram",
  Moon = "moon",
  Sun = "sun",
  Tiktok = "tiktok",
  WhatsApp = "whatsapp",
  Youtube = "youtube",
}

const iconComponents: IconComponents = {
  [Icons.Check]: Check,
  [Icons.Instagram]: Instagram,
  [Icons.Moon]: Moon,
  [Icons.Sun]: Sun,
  [Icons.Tiktok]: Tiktok,
  [Icons.WhatsApp]: WhatsApp,
  [Icons.Youtube]: Youtube,
};

export const renderSvg = (
  icon: Icons,
  width: number,
  height: number,
  color?: string
) => {
  const IconComponent = iconComponents[icon];

  if (!IconComponent) {
    console.error(`Icon "${icon}" not found`);
    return null;
  }

  return <IconComponent width={width} height={height} color={color} />;
};
