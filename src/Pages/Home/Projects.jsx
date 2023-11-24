import { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Recipe Hunter",
      gitLinkClient: "https://github.com/AbidReal/chef-recipe-hunter-client",
      gitLinkServer: "https://github.com/AbidReal/chef-recipe-hunter-server",
      liveSite: "https://chef-recipe-hunter-3306f.web.app/",
      images: [
        "https://i.ibb.co/Fhq6hC6/image.png",
        "https://i.ibb.co/Fhq6hC6/image.png",
        "https://i.ibb.co/Fhq6hC6/image.png",
        "https://i.ibb.co/Fhq6hC6/image.png",
        "https://i.ibb.co/Fhq6hC6/image.png",
      ],
      description: "This is the description of Website 1.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Toy Marketplace",
      gitLinkClient: "https://github.com/AbidReal/toy-marketplace-client",
      gitLinkServer: "https://github.com/AbidReal/toy-marketplace-server",
      liveSite: "https://toy-marketplace-a7ee2.web.app/",
      images: [
        "https://i.ibb.co/Zddsq4C/image-2023-11-24-162833264.png",
        "https://i.ibb.co/KjPPxwx/image-2023-11-24-162531491.png",
        "https://i.ibb.co/Ks68d1k/image-2023-11-24-162638869.png",
        "https://i.ibb.co/Fn4nBQ2/image-2023-11-24-162713830.png",
      ],
      description: "This is the description of Website 2.",
      technologies: ["React", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Course Enroll",
      gitLinkClient: "",
      gitLinkServer: "",
      liveSite: "https://summer-camp-school-martial-art.web.app",
      images: [
        "https://i.ibb.co/Fhq6hC6/image.png",
        "https://i.ibb.co/Fhq6hC6/image.png",
        "https://i.ibb.co/Fhq6hC6/image.png",
        "https://i.ibb.co/Fhq6hC6/image.png",
        "https://i.ibb.co/Fhq6hC6/image.png",
      ],
      description: "This is the description of Website 3.",
      technologies: ["Vue.js", "Node.js"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div id="projects" className="bg-secondaryBgColor">
      <div className="custom-container mt-20">
        <div className="text-center text-7xl font-bold text-white relative mb-36 mt-20 uppercase ">
          <span className="border-b-8 border-primaryColor absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-20  "></span>
          Projects
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 mb-36">
          {projectsData.map((project) => (
            <div key={project.id} className="custom-card">
              <div className="img-box">
                <img
                  className="w-full h-full rounded-3xl object-cover"
                  src={project.images[0]}
                  alt=""
                />
              </div>
              <div className="content p-5 text-white">
                <div className="details">
                  <button
                    className="btn hover:bg-hoverColor active:bg-activeColor bg-primaryColor text-black items-center text-center font-semibold rounded-xl transition-colors duration-300 absolute inset-0 flex justify-center mx-5 my-3"
                    onClick={() => handleDetailsClick(project)}
                  >
                    Details
                  </button>
                </div>
                <div className=" font-semibold text-xl ">{project.title}</div>
                <div className="flex items-center justify-between ">
                  {/* git code link */}
                  <div className="flex flex-col gap-2 mt-6 ">
                    {" "}
                    {project.gitLinkClient && (
                      <Link
                        to={project.gitLinkClient}
                        className=" hover:text-hoverColor"
                      >
                        Client Code →
                      </Link>
                    )}
                    {project.gitLinkServer && (
                      <Link
                        to={project.gitLinkServer}
                        className=" hover:text-hoverColor"
                      >
                        Server Code →
                      </Link>
                    )}
                  </div>
                  {/* live site link  */}
                  <Link
                    to={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn hover:bg-hoverColor active:bg-activeColor bg-primaryColor text-black items-center text-center font-semibold rounded-xl transition-colors duration-300  flex justify-center px-10  mt-6"
                  >
                    Live Preview
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying project details */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-base-100 p-5 md:p-10 rounded-lg max-w-md lg:max-w-lg xl:max-w-5xl w-full">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedProject.title}
            </h2>
            <Carousel showThumbs={false} showStatus={false}>
              {selectedProject.images.map((image, index) => (
                <div key={index}>
                  <img
                    className="w-full h-auto max-h-64 md:max-h-96 lg:max-h-[900px] rounded-lg object-cover"
                    src={image}
                    alt={`Image ${index}`}
                  />
                </div>
              ))}
            </Carousel>
            <p className="mb-4">{selectedProject.description}</p>
            <p className="mb-4">
              <strong>Technologies used:</strong>{" "}
              {selectedProject.technologies.join(", ")}
            </p>
            <button
              className="btn bg-primaryColor text-white font-semibold"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
