import {
    Cta,
    Heading,
    Services,
    Ubication,
    WhoWeAre,
} from "@/components/landing";
import {Footer, Header} from "@/components/ui";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Heading />
                <WhoWeAre />
                <Services />
                <Ubication />
                <Cta />
            </main>
            <Footer />
        </>
    );
}
