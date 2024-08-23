import React, {FC} from "react";

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
    return (
        <ul className="grid grid-cols-3">
            {videoList.map((video: Video) => (
                <React.Fragment key={video.id}>
                    <VideoCard {...video} />
                </React.Fragment>
            ))}
        </ul>
    );
};
