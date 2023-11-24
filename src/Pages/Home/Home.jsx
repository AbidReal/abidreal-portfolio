import { useState } from "react";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div>
      <Nav selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
