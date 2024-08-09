import React from "react";

import {Footer, Header} from "@/components/ui";

const WhoWeAre = () => {
    return (
        <React.Fragment>
            <Header showMenuItems={false}>
                <main>
                    <h1>Who We Are</h1>
                </main>
            </Header>
            <Footer />
        </React.Fragment>
    );
};

export default WhoWeAre;
