import {videos} from "@/data/videos";

export function fetchVideosByCategory(categoryId: number) {
    return videos.filter((video) => parseInt(video.id) === categoryId);
}

export function fetchMostVotedVideos() {
    return videos.sort((a, b) => b.rating - a.rating).slice(0, 5);
}
