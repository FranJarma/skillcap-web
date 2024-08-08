import React, {FC, useMemo} from "react";
import {VideoCard} from "./VideoCard";

export interface Video {
    id: string;
    title: string;
    url: string;
    rating: number;
    comments: string[];
    thumbnail: string;
}

interface VideoListProps {
    videoList: Video[];
}

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
