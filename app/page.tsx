
import Hero from "./hero/page";
import About from "./about/page";
import Skills from "./skills/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
