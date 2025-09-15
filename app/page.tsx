
import Hero from "./hero/page";
import About from "./about/page";
import Skills from "./skills/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Certifications from "./certifications/page";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Certifications />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
