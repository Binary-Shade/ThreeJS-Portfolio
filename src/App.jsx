// src/App.js
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const {progress} = useProgress()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setIsReady(true), 300)
      return () => clearTimeout(timeout)
    }
  }, [progress])
  return (
    <>
      {!isReady ? <LoadingScreen /> : (
        <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Clients />
      <Footer />
    </>
      ) }

    </>
  );
}

export default App;