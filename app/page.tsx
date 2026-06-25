import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Personas from "./components/Personas";
import BusinessModel from "./components/BusinessModel";
import Team from "./components/Team";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Personas />
        <BusinessModel />
        <Team />
        <Contact />
      </main>
    </>
  );
}
