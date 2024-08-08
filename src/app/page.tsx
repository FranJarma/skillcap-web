import {Footer, Header} from "@/ui";
import {
    Cta,
    Heading,
    Services,
    Ubication,
    WhoWeAre,
} from "@/components/landing";

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
