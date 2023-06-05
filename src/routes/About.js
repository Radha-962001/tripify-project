import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../images/abt.jpeg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About us"
        btnClass="hide"
      />
      <Aboutus />
      <Footer />
    </>
  );
}

export default About;
