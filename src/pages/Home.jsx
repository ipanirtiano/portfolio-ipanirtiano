import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Herro from "../components/Herro";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Herro />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
