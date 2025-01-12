import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import About from "./ui/About";
import Contact from "./ui/Contact";
import Hero from "./ui/Hero";
import ProjectList from "./ui/ProjectList";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);
  return (
    <>
      <Hero />
      <ProjectList />
      <About />
      <Contact />
    </>
  );
}

export default App;
