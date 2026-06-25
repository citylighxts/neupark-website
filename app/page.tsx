import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Demo from "./components/Demo";
import Features from "./components/Features";
import Personas from "./components/Personas";
import Research from "./components/Research";
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
        <Solution />
        <HowItWorks />
        <Demo />
        <Features />
        <Personas />
        <Research />
        <BusinessModel />
        <Team />
        <Contact />
      </main>
    </>
  );
}
