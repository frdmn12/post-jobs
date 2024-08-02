import { navLists } from "../constants";
import { logoPostJob } from "../utils";
import Button from "./Button";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="w-full py-10 sm:pt-14 sm:px-16 flex justify-between items-center text-white">
      <nav className="flex w-full screen justify-around items-center">
        <div className="flex">
          <div className="flex gap-2 items-center">
            <img src={logoPostJob} />
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
        <IoMenuOutline className="hidden max-lg:block text-3xl cursor-pointer" />
      </nav>
    </header>
  );
};

export default Header;
