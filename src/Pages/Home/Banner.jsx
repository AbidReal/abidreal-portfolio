import { useEffect, useState } from "react";
import { GrDocumentDownload } from "react-icons/gr";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  // For the circle and the text animation
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "React Developer",
    "Front-end Developer",
    "MERN Stack Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let lastChar = loopNum % toRotate.length;
    let fullText = toRotate[lastChar];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200 - Math.random() * 100);
    }
  };

  const handleDownload = () => {
    const fileID = "1EiGWTqD7lAs3mlzOLwTNZcACID5Vyy3I";
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileID}`;
    window.open(downloadLink, "_blank");
  };

  return (
    <div id="home">
      <div className="bg-[#2c2c30]">
        {/* Background color */}
        <div className=" h-[56.5rem] lg:h-[37.3rem] xl:h-[56.5rem] flex items-center justify-evenly -z-20 ">
          {/* neon ellipse  */}
          {/* round ellipse 1  */}
          <div className="absolute aspect-square w-1/2 lg:w-[28rem]  xl:w-[42rem] object-contain lg:left-20 xl:left-52 lg:top-24 xl:top-40 customBorder"></div>
          {/* round ellipse 2  */}
          <div
            className="absolute aspect-square w-1/2 lg:w-[28rem]  xl:w-[42rem] 
          object-contain lg:left-20 xl:left-52 lg:top-24 xl:top-40 customBorder2"
          ></div>

          {/* image  */}
          <div className="absolute w-3/5 lg:h-[37.3rem]  xl:h-[56.4rem] object-contain lg:left-3 xl:left-24 lg:top-[3.4rem] xl:top-20 ">
            <img
              src="https://i.ibb.co/KXhdsPB/portfolio-image-final.png"
              alt="Abid Hasan"
              className=" z-10 h-full"
            />
          </div>

          {/* Foreground right side texts */}
          <div></div>
          <div className="z-40 ml-4 md:ml-60 ">
            <div className="text-primaryColor text-4xl md:text-5xl font-bold">
              ABID HA
              <span className="underline underline-offset-8">
                SAN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </div>
            <div className="pt-1 text-4xl md:text-5xl font-bold text-white">
              {text}_
            </div>
            <div className="mt-5 md:mt-10 max-w-[32rem] text-xl md:text-2xl">
              Front-end developer focused on creating Web applications. I really
              like different projects that solve real problems.
            </div>
            <div
              className="customButton mt-5 md:mt-10"
              onClick={handleDownload}
            >
              <GrDocumentDownload />
              Resume
            </div>
            {/*contact links */}
            <div className="mt-5 md:mt-10 text-3xl md:text-4xl gap-5 md:gap-10 flex">
              <Link to="https://github.com/AbidReal">
                <FaGithub className="hover:scale-110 transform transition-transform" />
              </Link>
              <Link to="https://www.linkedin.com/in/abid-hasan-4952a724a/">
                <FaLinkedin className="hover:scale-110 transform transition-transform" />
              </Link>
              <Link to="mailto:abidhasan00123@gmail.com ">
                <FaEnvelope className="hover:scale-110 transform transition-transform" />
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=100038736845651">
                <FaFacebook className="hover:scale-110 transform transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Foreground component */}

        <div className="absolute top-0 right-0 lg:flex items-center justify-end z-30 w-screen lg:h-[17rem] xl:h-[55.2rem] hidden ">
          <div className="absolute triangle w-8/12 flex justify-center items-center h-full z-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
