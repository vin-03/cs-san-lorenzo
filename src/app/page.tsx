import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";
import Campi from "@/components/Campi/Campi";
import Corsi from "@/components/Corsi/Corsi";
import Cta from "@/components/Cta/Cta";
import Hero from "@/components/Hero/Hero";
import Info from "@/components/Info/Info";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Campi />
            <Corsi />
            <About />
            <Info />
            <Cta />
            <Footer />
        </>
    );
}
