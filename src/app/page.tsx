import {
    Cta,
    Heading,
    Services,
    Ubication,
    WhoWeAre,
} from "@/components/landing";
import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";

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
