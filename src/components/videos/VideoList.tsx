"use client";

import React, {FC} from "react";

import {Skeleton} from "@nextui-org/react";

import {VideoCard} from "./VideoCard";

export type Video = {
    categoryId: number;
    id: string;
    title: string;
    url: string;
    rating: number;
    comments: string[];
    thumbnail: string;
};

type VideoListProps = {
    videoList: Video[];
};

export const VideoList: FC<VideoListProps> = ({videoList}) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    setTimeout(() => {
        setIsLoaded(true);
    }, 5000);

    return (
        <ul className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {videoList.map((video: Video) => (
                <React.Fragment key={video.id}>
                    <Skeleton isLoaded={isLoaded}>
                        <VideoCard {...video} />
                    </Skeleton>
                </React.Fragment>
            ))}
        </ul>
    );
};
