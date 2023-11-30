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
    <div id="about" className="bg-secondaryBgColor ">
      <div data-aos="fade-up" className="custom-container ">
        <div className="customTitle mb-10 pt-20">
          <span className="customTitleDesign "></span>
          About Me
        </div>
        <div
          data-aos="fade-up"
          className="text-center text-xl lg:text-3xl mb-20 mx-10 xs:mx-0  lg:mx-36 "
        >
          {/* Will Update Later */}
          I&rsquo;m <span className="text-primaryColor">Abid Hasan</span>, a
          21-year-old student currently pursuing my academic endeavors at a
          university in Bangladesh. I&rsquo;m a{" "}
          <span className="text-primaryColor">Front-end developer</span>{" "}
          specializing in <span className="text-primaryColor">React</span> . I
          have successfully executed projects utilizing the{" "}
          <span className="text-primaryColor">MERN stack</span>. I&rsquo;m
          passionate about interfaces, from their conceptualization to their
          development. I am a dedicated learner who thrives on
          <span className="text-primaryColor">challenges</span> that push me
          beyond my comfort zone, allowing me to deliver optimal performance.{" "}
          <br /> <br />
          Currently, I am actively engaged in{" "}
          <span className="text-primaryColor">learning React Native</span>{" "}
          Development, anticipating the opportunity to craft visually compelling
          mobile applications.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
