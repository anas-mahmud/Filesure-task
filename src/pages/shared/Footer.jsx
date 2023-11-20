import logo from "../../assets/footer-logo.png";
import { FaFacebook } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="text-white body-font">
      <div className="bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
        <div className="px-20 py-9 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <img src={logo} alt="" />
            <p className="mt-4 text-sm text-white">
              India{"'"}s first platform dedicated to simplifying partner search
            </p>
          </div>
          <div className="flex-grow flex md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                COMPANY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white text-sm">About</a>
                </li>
                <li>
                  <a className="text-white text-sm">Pricing</a>
                </li>
                <li>
                  <a className="text-white text-sm">Careers</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                SOLUTIONS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white text-sm">Search</a>
                </li>
                <li>
                  <a className="text-white text-sm">Connect</a>
                </li>
                <li>
                  <a className="text-white text-sm">Research</a>
                </li>
                <li>
                  <a className="text-white text-sm">Academy</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                RESOURCES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white text-sm">Blogs</a>
                </li>
                <li>
                  <a className="text-white text-sm">Forms</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                SUPPORT
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white text-sm">Help</a>
                </li>
                <li>
                  <a className="text-white text-sm">Contact Us</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                LEGAL
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white text-sm">Privacy</a>
                </li>
                <li>
                  <a className="text-white text-sm">Terms</a>
                </li>
                <li>
                  <a className="text-white text-sm">Accessibility</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <hr className="w-[1380px] mx-auto" />
        <div className="flex justify-between py-8 mx-20">
          <p className="text-sm">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </p>
          <div className="flex gap-6">
            <FaFacebook />
            <SiInstagram />
            <FaLinkedinIn />
            <ImWhatsapp />
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-5 px-5 flex justify-center">
          <p className="text-white text-xs sm:text-left">
            Registered trademark of India Private Limited © 2023 loerumipsum
            Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
