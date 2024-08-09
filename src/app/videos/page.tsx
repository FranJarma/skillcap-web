"use client";
import React, {useMemo} from "react";

import {Layout} from "@/components/common/Layout";
import {VideoList} from "@/components/videos/VideoList";
import {videos} from "@/data/videos";

const seo = {
    description:
        "Disfruta de los mejores videos deportivos en tiempo real en Skillcap. Encuentra tus momentos favoritos de fútbol, padel, y más.",
    title: `Observe todos sus videos utilizando Skillcap`,
};

const Videos = () => {
    const mostVotedVideos = useMemo(() => {
        return videos.filter((video) => parseInt(video.id) <= 10);
    }, []);

    const bestGoals = useMemo(() => {
        return videos.filter(
            (video) => parseInt(video.id) > 10 && parseInt(video.id) <= 15
        );
    }, []);

    const bestAssists = useMemo(() => {
        return videos.filter((video) => parseInt(video.id) > 15);
    }, []);

    return (
        <React.Fragment>
            <Layout seo={seo}>
                <h2 className="text-2xl text-center uppercase text-teal-300 opacity-100 peer-hover:text-teal-700">
                    Jugadas más votadas
                </h2>
                <VideoList videoList={mostVotedVideos} />
                <h2 className="text-2xl text-center uppercase text-teal-700 peer hover:text-teal-300">
                    Mejores goles
                </h2>
                <VideoList videoList={bestGoals} />
                <h2 className="text-2xl text-center uppercase text-teal-700 peer hover:text-teal-300">
                    Mejores asistencias
                </h2>
                <VideoList videoList={bestAssists} />
            </Layout>
        </React.Fragment>
    );
};

export default Videos;
