import AnchorLink from "react-anchor-link-smooth-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ToggleDark from "./ToggleDark";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Link = ({ page, selectedPage, setSelectedPage }) => {
  // eslint-disable-next-line react/prop-types
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-green-400" : ""
      } hover:text-green-400 transition duration-500 `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
      }}
    >
      {page}
    </AnchorLink>
  );
};

// eslint-disable-next-line react/prop-types
const Nav = ({ selectedPage, setSelectedPage }) => {
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
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
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
                    <div className="p-5 bg-zinc-900 border rounded-lg shadow-sm z-50 ">
                      <div className="flex items-center justify-end mb-4 ">
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
                        <ul className=" space-y-4 py-5">
                          <li>
                            <Link
                              page="Home"
                              selectedPage={selectedPage}
                              setSelectedPage={setSelectedPage}
                            />
                          </li>
                          <li>
                            <Link
                              page="About"
                              selectedPage={selectedPage}
                              setSelectedPage={setSelectedPage}
                            />
                          </li>
                          <li>
                            <Link
                              page="Projects"
                              selectedPage={selectedPage}
                              setSelectedPage={setSelectedPage}
                            />
                          </li>

                          <li>
                            <Link
                              page="Contact"
                              selectedPage={selectedPage}
                              setSelectedPage={setSelectedPage}
                            />
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
