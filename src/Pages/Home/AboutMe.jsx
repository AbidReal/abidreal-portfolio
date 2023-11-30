import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutMe = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div className="bg-secondaryBgColor ">
      <div data-aos="fade-up" className="custom-container ">
        <div id="about" className="customTitle mb-10 pt-20">
          <span className="customTitleDesign "></span>
          About Me
        </div>
        <div
          data-aos="fade-up"
          className="text-center text-xl lg:text-3xl mb-20 mx-10 xs:mx-0  lg:mx-36 "
        >
          {/* Will Update Later */}
          I&rsquo;m <span className="text-primaryColor">Abid Hasan</span> ,
          I&rsquo;m 21 years old and I currently I am studying in a University
          in Bangladesh. I am a{" "}
          <span className="text-primaryColor">Front-end developer</span> and{" "}
          <span className="text-primaryColor">React Developer</span>. I have
          also created <span className="text-primaryColor">MERN stack</span>{" "}
          projects. I&rsquo;m passionate about interfaces, from their creation
          to development. I like to learn more and more about this area,
          <span className="text-primaryColor">challenges</span> that take me out
          of my comfort zone are the best. <br /> <br /> I am actively engaged
          in <span className="text-primaryColor">learning React Native</span>{" "}
          Development and am excited to create practical and eye-catching mobile
          apps in the future.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
