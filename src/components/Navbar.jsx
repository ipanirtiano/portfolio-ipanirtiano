/* eslint-disable no-unused-vars */
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { isDark, handleDarkMode } = useContext(DarkModeContext);

  console.log(isDark);

  const [menu, setMenu] = useState(false);
  const [isScrolled, setIscrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIscrolled(true);
      } else {
        setIscrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all duration-300 ease-in-out dark:bg-gray-950 fixed top-0 left-0 right-0 px-6 py-6 h-[40px] md:px-16 z-20 ${
        isScrolled ? "bg-white shadow-md" : ""
      } `}
    >
      <div className="relative  flex justify-between items-center h-full">
        <div className="cursor-pointer font-semibold text-lg md:text-2xl text-cyan-600 dark:text-gray-100">
          Portfolio
        </div>

        <div
          className={`absolute bg-white dark:bg-gray-950 md:dark:bg-transpatent md:bg-transparent right-0 top-[30px] w-[270px] md:w-full md:border-none md:shadow-none rounded-md shadow-xl border dark:border-none px-4 py-5 md:py-0 md:static transition-opacity ease-in-out duration-300 md:opacity-100 ${
            menu ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="md:flex md:justify-center md:gap-x-5 ">
            <li className="py-3 px-3 hover:text-cyan-600 text-gray-900 dark:text-gray-100">
              <a href="#">Home</a>
            </li>
            <li className="py-3 px-3 hover:text-cyan-600 text-gray-900 dark:text-gray-100">
              <a href="#aboutme">About me</a>
            </li>
            <li className="py-3 px-3 hover:text-cyan-600 text-gray-900 dark:text-gray-100">
              <a href="#skills">Skills</a>
            </li>
            <li className="py-3 px-3 hover:text-cyan-600 text-gray-900 dark:text-gray-100">
              <a href="#portfolio">Portfolio</a>
            </li>

            <li className="py-3 px-3 hover:text-cyan-600 text-gray-900 dark:text-gray-100">
              <a href="#contact">Contact</a>
            </li>
            <li className="py-3 px-3 flex items-center gap-x-2">
              {isDark === "light" ? (
                <BsFillMoonStarsFill
                  onClick={handleDarkMode}
                  className="text-gray-600 cursor-pointer md:hidden hover:text-cyan-600 text-xl dark:text-gray-100"
                />
              ) : (
                ""
              )}

              {isDark === "dark" ? (
                <BsFillSunFill
                  onClick={handleDarkMode}
                  className="text-gray-600 cursor-pointer md:hidden hover:text-cyan-600 text-xl dark:text-gray-100"
                />
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center w-[30px] cursor-pointer md:hidden">
          {menu ? (
            <IoMdClose
              className="text-3xl text-gray-600 dark:text-gray-100"
              onClick={() => setMenu(!menu)}
            />
          ) : (
            <GiHamburgerMenu
              className="text-2xl text-gray-600 dark:text-gray-100"
              onClick={() => setMenu(!menu)}
            />
          )}
        </div>

        {isDark === "light" ? (
          <BsFillMoonStarsFill
            onClick={handleDarkMode}
            className="text-gray-600 text-xl cursor-pointer hidden md:block hover:text-cyan-600 dark:text-gray-100"
          />
        ) : (
          ""
        )}

        {isDark === "dark" ? (
          <BsFillSunFill
            onClick={handleDarkMode}
            className="text-gray-600 text-xl cursor-pointer hidden md:block hover:text-cyan-600 dark:text-gray-100"
          />
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Navbar;
