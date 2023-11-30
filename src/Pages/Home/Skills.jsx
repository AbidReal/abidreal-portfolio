import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  const isMobile = window.innerWidth < 768;

  return (
    <div className="custom-container">
      <div data-aos="fade-up" className="text-center text-white ">
        <div className="customTitle mb-10 lg:mb-32 mt-20">
          <span className="customTitleDesign  "></span>
          Skills
        </div>
        <div className="grid grid-cols-3 gap-10 mb-10 ">
          <div
            data-aos={isMobile ? "fade-up" : "fade-right"}
            data-aos-anchor="#anchor-html"
            id="anchor-html"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
              alt="html5"
              title="HTML5"
              className="customSkillDesign"
            />
          </div>

          <div
            data-aos={isMobile ? "fade-up" : "fade-up"}
            data-aos-anchor="#anchor-css3"
            id="anchor-css3"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
              alt="css3"
              title="CSS3"
              className="customSkillDesign"
            />
          </div>
          <div
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-anchor="#anchor-reactjs"
            id="anchor-reactjs"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"
              alt="react"
              title="REACTJS"
              className="customSkillDesign"
            />
          </div>
          <div
            data-aos={isMobile ? "fade-up" : "fade-right"}
            data-aos-anchor="#anchor-tailwind"
            id="anchor-tailwind"
          >
            <img
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              alt="tailwindcss"
              title="TAILWIND CSS"
              className="customSkillDesign"
            />
          </div>
          <div
            data-aos={isMobile ? "fade-up" : "fade-up"}
            data-aos-anchor="#anchor-bootstrap"
            id="anchor-bootstrap"
          >
            <img
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
              alt="bootstrap"
              title="BOOTSTRAP"
              className="customSkillDesign"
            />
          </div>
          <div
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-anchor="#anchor-mongodb"
            id="anchor-mongodb"
          >
            <img
              src="https://i.ibb.co/DMkCqW3/image.png"
              alt="mongodb"
              title="MONGODB"
              className="customSkillDesign"
            />
          </div>
          <div
            data-aos={isMobile ? "fade-up" : "fade-right"}
            data-aos-anchor="#anchor-firebase"
            id="anchor-firebase"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png?20200723100028"
              alt="firebase"
              title="FIREBASE"
              className="customSkillDesign"
            />
          </div>
          <div
            data-aos={isMobile ? "fade-up" : "fade-up"}
            data-aos-anchor="#anchor-javascript"
            id="anchor-javascript"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="javascript"
              title="JAVASCRIPT"
              className="customSkillDesign"
            />
          </div>
          <div
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-anchor="#anchor-nodejs"
            id="anchor-nodejs"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
              alt="nodejs"
              title="NODEJS"
              className="customSkillDesign"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
