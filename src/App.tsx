import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import ShowCase from "./components/ShowCase";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import Performance from "./components/Performance";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <ShowCase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
