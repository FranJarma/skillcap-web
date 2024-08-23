import {NavbarItem} from "@nextui-org/react";
import Link from "next/link";

import {menuItems} from "@/components/ui/MenuItem/MenuItem";
import {scrollIntoView} from "@/helpers";

export const HeaderItems = () => {
    return (
        <div className="hidden min-[1024px]:flex gap-4">
            {menuItems.map((item, index) => (
                <NavbarItem
                    key={`${item}-${index}`}
                    className="flex border-teal-600 hover:border-b-2"
                >
                    <Link
                        className="text-center justify-center items-center"
                        color="foreground"
                        href={item.href || ""}
                        onClick={scrollIntoView}
                    >
                        {item.label}
                    </Link>
                </NavbarItem>
            ))}
        </div>
    );
};
