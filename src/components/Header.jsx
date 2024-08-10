import { useRef, useState, useEffect } from "react";
import { navLists } from "../constants";
import { logoPostJob } from "../utils";
import Button from "./Button";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import gsap from "gsap";

const Header = () => {
  const [nav, setNav] = useState(false);
  const iconMenuRef = useRef(null);
  const iconCloseRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav) {
      gsap.to(iconMenuRef.current, { rotate: 180, duration: 0.5, opacity: 0 });
      gsap.to(iconCloseRef.current, { rotate: 0, duration: 0.5, opacity: 1 });
    } else {
      gsap.to(iconCloseRef.current, { rotate: 180, duration: 0.5, opacity: 0 });
      gsap.to(iconMenuRef.current, { rotate: 0, duration: 0.5, opacity: 1 });
    }
  }, [nav]);

  return (
    <header className="w-full py-10 sm:pt-14 sm:px-16 flex justify-between items-center text-white">
      <nav className="flex w-full screen justify-around items-center">
        <div className="flex">
          <div className="flex gap-2 items-center">
            <img src={logoPostJob} className="w-6" alt="Post Job Logo" />
            <h1 className="font-sf-pro-display font-medium text-sm md:text-md">
              Post Job
            </h1>
          </div>
          <ul className="max-lg:hidden">
            {navLists.map((navList, index) => (
              <li
                key={index}
                className="text-sm md:text-md text-gray-1 font-sf-pro-display font-medium inline-block ml-6 cursor-pointer hover:text-gray-300 "
              >
                {navList}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-lg:hidden">
          <Button text="Sign In" />
          <Button text="Get Started" />
        </div>
        <button onClick={handleNav} className="hidden max-lg:block relative z-40">
          <IoMenuOutline
            ref={iconMenuRef}
            className={`text-3xl cursor-pointer ${nav ? "hidden" : "block"}`}
          />
          <IoCloseOutline
            ref={iconCloseRef}
            className={`text-3xl cursor-pointer ${nav ? "block" : "hidden"}`}
          />
        </button>
        {/* Overlay */}
        {nav && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={handleNav}
          ></div>
        )}
        <ul
          className={
            nav
              ? "fixed md:hidden z-30 left-0 top-0 w-[60%] h-full border-r border-gray-900 p-4 bg-black ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-green-1 m-4">
            Post Job
          </h1>
          {navLists.map((navList, index) => (
            <li
              key={index}
              className="p-4 underline rounded-xl hover:bg-green-1 duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              {navList}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
