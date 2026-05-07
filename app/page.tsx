import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main id="main-content">
        <Hero />
        <Bio />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
