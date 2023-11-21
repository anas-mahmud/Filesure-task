import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="background px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-20" >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <img src={logo} alt="" />
          <ul className="items-center hidden space-x-8 lg:flex">
            <li className="flex gap-[2px]">
              <Link
                to={"/"}
                aria-label="Solutions"
                title="Solutions"
                className="font-bold text-black"
              >
                Solutions
              </Link>
              <MdKeyboardArrowDown className="text-2xl text-[#0076CE]" />
            </li>
            <li className="flex gap-[2px]">
              <Link
                to={"/"}
                aria-label="Features"
                title="Features"
                className="font-bold text-black"
              >
                Features
              </Link>
              <MdKeyboardArrowDown className="text-2xl text-[#0076CE]" />
            </li>
            <li>
              <Link
                to={"/"}
                aria-label="Blogs"
                title="Blogs"
                className="font-bold text-black"
              >
                Blogs
              </Link>
            </li>
            <li className="flex gap-[2px]">
              <Link
                to={"/"}
                aria-label="About us"
                title="About us"
                className="font-bold text-black"
              >
                About
              </Link>
              <MdKeyboardArrowDown className="text-2xl text-[#0076CE]" />
            </li>
          </ul>
        </div>
        <div className="items-center hidden space-x-4 lg:flex">
          <button className="py-3 px-5 font-bold leading-6 text-[#0076CE] border-[1.5px] border-[#0076CE] rounded-xl">
            Login
          </button>
          <button className="py-3 px-5 font-bold leading-6 text-white bg-[#0076CE] border-[1.5px] border-[#0076CE] rounded-xl">
            Register
          </button>
        </div>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <img src={logo} alt="" />
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                     <MdOutlineCancel className="text-3xl"/>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to={"/"}
                        aria-label="Solutions"
                        title="Solutions"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/"}
                        aria-label="Features"
                        title="Features"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <a
                        to={"/"}
                        aria-label="Blogs"
                        title="Blogs"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        to={"/"}
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                  <div className="items-center space-x-4 flex mt-5">
                    <button className="py-3 px-14 font-bold leading-6 text-[#0076CE] border-[1.5px] border-[#0076CE] rounded-md">
                      Login
                    </button>
                    <button className="py-3 px-14 font-bold leading-6 text-white bg-[#0076CE] border-[1.5px] border-[#0076CE] rounded-md">
                      Register
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
