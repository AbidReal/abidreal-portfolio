const AboutMe = () => {
  return (
    <div id="about" className="bg-secondaryBgColor ">
      <div className="custom-container mt-20">
        <div className="text-center text-7xl font-bold text-white relative mb-10 mt-20 uppercase ">
          <span className="border-b-8 border-primaryColor absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-20 "></span>
          About Me
        </div>
        <div className="text-center text-3xl mb-20 mx-36 ">
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
