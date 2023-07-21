const Banner = () => {
  return (
    <div className="">
      <div className="relative">
        {/* Background color */}
        <div className="bg-zinc-700 h-[56.5rem] flex items-center justify-evenly">
          <div></div>
          <div className="z-20">
            <div className="text-primaryColor text-4xl  ">
              ABID HA
              <span className="underline underline-offset-8">
                SAN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </div>
            <div className="pt-1 text-4xl">Front-end Developer</div>
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
