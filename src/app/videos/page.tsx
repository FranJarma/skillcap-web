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
                <section className="flex flex-col gap-4">
                    <h2 className="inline bg-gradient-to-b from-black to-teal-400 text-2xl font-bold">
                        Jugadas más votadas
                    </h2>
                    <VideoList videoList={mostVotedVideos} />
                    <h2 className="inline bg-gradient-to-b from-black to-teal-400 text-2xl font-bold">
                        Mejores goles
                    </h2>
                    <VideoList videoList={bestGoals} />
                    <h2 className="inline bg-gradient-to-b from-black to-teal-400 text-2xl font-bold">
                        Mejores asistencias
                    </h2>
                    <VideoList videoList={bestAssists} />
                </section>
            </Layout>
        </React.Fragment>
    );
};

export default Videos;
