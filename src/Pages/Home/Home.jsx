import AboutMe from "./AboutMe";
import Banner from "./Banner";
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
    </div>
  );
};

export default Home;
