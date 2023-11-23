import AboutMe from "./AboutMe";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
