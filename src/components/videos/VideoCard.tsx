import React, {FC} from "react";

import Image from "next/image";

import {Video} from "./VideoList";

export const VideoCard: FC<Video> = (video) => {
    const {title, thumbnail} = video;

    return (
        <section>
            <picture>
                <h3>{title}</h3>
                <Image
                    alt={`Video-${title}`}
                    height={256}
                    src={thumbnail}
                    width={256}
                />
            </picture>
        </section>
    );
};
