import { useState } from "react";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import { motion } from "framer-motion";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div>
      <Nav selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <motion.div onViewportEnter={() => setSelectedPage("home")}>
        <Banner />
      </motion.div>
      <motion.div onViewportEnter={() => setSelectedPage("about")}>
        <AboutMe />
      </motion.div>
      <Skills />
      <motion.div onViewportEnter={() => setSelectedPage("projects")}>
        <Projects />
      </motion.div>
      <motion.div onViewportEnter={() => setSelectedPage("contact")}>
        <ContactMe />
      </motion.div>
    </div>
  );
};

export default Home;
