import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ToggleDark from "./ToggleDark";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 text-xl">
      <div className="absolute top-0 left-0 w-full  backdrop-filter backdrop-blur-sm">
        <div className="custom-container">
          <div className="relative flex items-center justify-between">
            <div className="flex flex-col gap-4 items-center">
              {/* Logo or other content */}
            </div>

            {/* Nav section */}
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-green-400" : "default"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-green-400" : "default"
                  }
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "text-green-400" : "default"
                  }
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-green-400" : "default"
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex items-center space-x-4 md:space-x-10">
              <ToggleDark />

              <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(true)}>
                  <Bars3Icon className="w-6" />
                </button>
                {/* Mobile responsive nav bar */}
                {isMenuOpen && (
                  <div className="absolute top-0 left-0 w-full z-10">
                    <div className="p-5 bg-green-500 border rounded-lg shadow-sm">
                      {/* Logo */}
                      <div className="flex items-center justify-between mg-4">
                        <Link
                          to="/"
                          className="flex flex-col gap-4 items-center"
                        >
                          {/* Logo content */}
                        </Link>
                        <ToggleDark />

                        {/* Dropdown close button */}
                        <div>
                          <button onClick={() => setIsMenuOpen(false)}>
                            <XMarkIcon className="w-6" />
                          </button>
                        </div>
                      </div>
                      {/* Nav items section */}
                      <nav>
                        <ul className="space-y-4 py-5">
                          <li>
                            <Link
                              to="/"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                            >
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/about"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                            >
                              About me
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/projects"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                            >
                              Projects
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/contact"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
