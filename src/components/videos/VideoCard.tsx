"use client";
import React, {FC} from "react";

import {Card, CardBody, CardFooter} from "@nextui-org/react";

import {Video} from "./VideoList";

export const VideoCard: FC<Video> = (video) => {
    const {title} = video;

    return (
        <Card
            isBlurred
            className="flex flex-col justify-center text-center rounded-sm !bg-foreground-50"
            radius="lg"
        >
            <CardBody className="p-0">
                <figcaption className="flex justify-center">
                    <h3 className="p-4">{title}</h3>
                </figcaption>
                <figure className="overflow-hidden">
                    <iframe className="h-80 w-full" src={video.url} />
                </figure>
            </CardBody>
            <CardFooter className="flex justify-evenly">
                <span>Likes</span>
                <span>Comentarios</span>
                <span>Compartidos</span>
            </CardFooter>
        </Card>
    );
};
