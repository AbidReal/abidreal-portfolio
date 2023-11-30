import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaTimes } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  const projectsData = [
    {
      id: 1,
      title: "Recipe Hunter",
      gitLinkClient: "https://github.com/AbidReal/chef-recipe-hunter-client",
      gitLinkServer: "https://github.com/AbidReal/chef-recipe-hunter-server",
      liveSite: "https://chef-recipe-hunter-3306f.web.app/",
      images: ["https://i.ibb.co/4pZRNDr/image-2023-11-24-173642334.png"],
      description: [
        "Yumami Eats: A website dedicated to Japanese cuisine.",
        "Authentication System: Users can create an account using email, Google, or GitHub, implemented using Firebase.",
        "Unique Design: The website showcases a distinctive design created by a front-end developer without the need for a reference Figma file. It reflects the developer's design sensibility.",
        "Chefs Section: Features a section highlighting six chefs, each with their unique recipes.",
        "Private Route: Clicking on a chef's recipe redirects users to a private route accessible only after logging in. The private route displays the chef's banner and a card layout featuring their dishes.",
        "Additional Features: Includes a favorite button and animations throughout the website.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "Firebase",
        "ExpressJS",
        "Tailwind CSS",
        "ReactJS",
      ],
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
      description: [
        "This is a toy marketplace which is focused on action figures.",
        "It's a responsive single page react website where you can find action figures category wise.",
        "It also has a all toy page where you can see all the toys in tabular form.",
        "If you login then you can see toys details, add toys of your own , edit and delete your added toys. You cannot edit toys uploaded by others. Only admin can do that.",
        "This website has many attractive sides like animation on scroll, beautiful ui, search feature etc.",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "ExpressJs",
        "MongoDB",
      ],
    },
    {
      id: 3,
      title: "Course Enroll",
      gitLinkClient: "",
      gitLinkServer: "",
      liveSite: "https://summer-camp-school-martial-art.web.app",
      images: [
        "https://i.ibb.co/cNNRQ57/Screenshot-2454.png",
        "https://i.ibb.co/xFZ2BSv/image-2023-11-24-180631667.png",
      ],
      description: ["Description will be updated soon."],
      technologies: ["Will Update soon."],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div id="projects" className="bg-secondaryBgColor">
      <div data-aos="fade-up" className="custom-container mt-20">
        <div className="customTitle mb-10 lg:mb-32 mt-20">
          <span className="customTitleDesign  "></span>
          Projects{" "}
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 mb-36"
        >
          {projectsData.map((project) => (
            <div key={project.id} className="custom-card ">
              <div className="img-box">
                <img
                  className="w-full h-full rounded-3xl object-cover"
                  src={project.images[0]}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="content p-5 text-white">
                <div className="details">
                  <button
                    className="btn hover:bg-primaryColor hover:text-black active:bg-primaryColor border-primaryColor bg-greyColor text-primaryColor items-center text-center font-semibold rounded-xl transition-colors duration-300 absolute inset-0 flex justify-center mx-5 my-3"
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
          <div className="bg-base-100 p-5 md:p-10 rounded-lg max-w-md lg:max-w-lg xl:max-w-5xl w-full overflow-y-auto max-h-screen relative">
            <h2 className="text-2xl font-semibold mb-4 ">
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
            <div className="mb-4">
              <span className="font-bold ">Description:</span> <br />
              {selectedProject.description.map((description, index) => (
                <div key={index} className="mt-1">
                  -{description}
                </div>
              ))}
            </div>
            <div className="mb-4">
              <span className="font-bold">Technologies used:</span>{" "}
              {selectedProject.technologies.join(", ")}
            </div>
            <button
              className=" p-2 rounded-full items-center bg-primaryColor hover:bg-hoverColor text-black font-bold absolute top-4 right-4  "
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
