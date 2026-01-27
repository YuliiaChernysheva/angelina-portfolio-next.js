import About from "@/components/About/About.jsx";
import Contact from "@/components/Contact/Contact.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Process from "@/components/Process/Process.jsx";
import Projects from "@/components/Projects/Projects.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
