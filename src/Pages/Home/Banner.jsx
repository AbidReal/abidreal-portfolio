import { useEffect, useState } from "react";

const Banner = () => {
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

  return (
    <div className="">
      <div className="relative">
        {/* Background color */}
        <div className="bg-zinc-700 h-[56.5rem] flex items-center justify-evenly">
          <div></div>
          <div className="z-20">
            <div className="text-primaryColor text-4xl font-bold  ">
              ABID HA
              <span className="underline underline-offset-8">
                SAN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </div>
            <div className="pt-1 text-4xl font-bold text-white">{text}</div>
          </div>
        </div>

        {/* Foreground component */}

        <div className="absolute top-0 right-0 flex items-center justify-end z-10 w-screen h-[56rem]">
          <div className="absolute triangle w-8/12 flex justify-center items-center h-full z-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
