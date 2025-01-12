import AOS from "aos";
import "aos/dist/aos.css";
import { lazy, Suspense, useEffect } from "react";
import Loading from "./ui/Loading";

const Hero = lazy(() => import("./ui/Hero"));
const About = lazy(() => import("./ui/About"));
const Contact = lazy(() => import("./ui/Contact"));
const ProjectList = lazy(() => import("./ui/ProjectList"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <ProjectList />
      <About />
      <Contact />
    </Suspense>
  );
}

export default App;
