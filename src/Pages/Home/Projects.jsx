const Projects = () => {
  return (
    <div className="bg-secondaryBgColor ">
      <div className="custom-container mt-20">
        <div className="text-center text-7xl font-bold text-white relative mb-10 mt-20 uppercase ">
          <span className="border-b-8 border-primaryColor absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-20 "></span>
          Projects
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10">
          {/* card start */}
          <div className="custom-card">
            <div className="img-box">
              <img
                className="w-full h-full rounded-3xl object-cover  "
                src="https://i.ibb.co/Fhq6hC6/image.png"
                alt=""
              />
            </div>
            <div className="content">
              <div className="details">
                <div className="btn  hover:bg-hoverColor active:bg-activeColor bg-primaryColor text-black items-center  text-center font-semibold  rounded-xl transition-colors duration-300 absolute inset-0 flex justify-center mx-5 my-3 ">
                  Details
                </div>
              </div>
            </div>
          </div>
          {/* another card */}
          <div className="custom-card">
            <div className="img-box">
              <img
                className="w-full h-full rounded-3xl object-cover  "
                src="https://i.ibb.co/Fhq6hC6/image.png"
                alt=""
              />
            </div>
            <div className="content">
              <div className="details">
                <div className="btn  hover:bg-hoverColor active:bg-activeColor bg-primaryColor text-black items-center  text-center font-semibold  rounded-xl transition-colors duration-300 absolute inset-0 flex justify-center mx-5 my-3 ">
                  Details
                </div>
              </div>
            </div>
          </div>
          {/* another card */}
          <div className="col-span-2 lg:col-span-1 flex justify-center">
            <div className="custom-card ">
              <div className="img-box">
                <img
                  className="w-full h-full rounded-3xl object-cover  "
                  src="https://i.ibb.co/Fhq6hC6/image.png"
                  alt=""
                />
              </div>
              <div className="content">
                <div className="details">
                  <div className="btn  hover:bg-hoverColor active:bg-activeColor bg-primaryColor text-black items-center  text-center font-semibold  rounded-xl transition-colors duration-300 absolute inset-0 flex justify-center mx-5 my-3 ">
                    Details
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card end */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
