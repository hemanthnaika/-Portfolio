import About from "./components/about";
import Contact from "./components/contact";
import Eduction from "./components/eduction";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Project from "./components/project";
import Skills from "./components/skills";
import Footer from "./layout/footer";

import Navbar from "./layout/navbar";
export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      <About />
      <Skills />
      <Experience />
      <Project />
      <Eduction />
      <Contact />
      <Footer />
    </main>
  );
}
