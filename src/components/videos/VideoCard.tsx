import React, {FC} from "react";
import {Video} from "./VideoList";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import Image from "next/image";

export const VideoCard: FC<Video> = (video) => {
    const {comments, rating, title, thumbnail} = video;

    return (
        <section>
            <picture>
                <h3>{title}</h3>
                <Image
                    src={thumbnail}
                    alt={`Video-${title}`}
                    width={256}
                    height={256}
                />
            </picture>
        </section>
    );
};
