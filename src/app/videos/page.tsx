import React from "react";

import {Layout} from "@/components/common/Layout";
import {VideoList} from "@/components/videos/VideoList";

import {fetchMostVotedVideos, fetchVideosByCategory} from "./utils/fetchVideos";

const mostVotedVideos = fetchMostVotedVideos();
const bestGoals = fetchVideosByCategory(1);
const bestAssists = fetchVideosByCategory(2);

const Videos = () => {
    return (
        <React.Fragment>
            <Layout showHeaderItems={false}>
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
