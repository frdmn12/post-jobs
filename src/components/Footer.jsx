import { footLists } from "../constants";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-green-1 p-10  md:p-20 flex-center text-center flex-col">
      <h1
        id="headers"
        className="text-xl md:text-6xl md:px-96 font-semibold font-sf-pro-display text-center"
      >
        What&apos;s next?
      </h1>
      <p className="px-1 md:px-96 my-5 text-base font-medium" id="description">
        Submit better job app — 10x faster. AI cover letter generator, resume
        keyword checker, outreach message writer, and more. Powered by GPT
      </p>
      <button
        className={`px-5 py-2 border border-black font-bold text-black hover:bg-black hover:text-green-1 rounded-xl m-1 text-xs md:text-base `}
      >
        Try For free Now
      </button>
      <ul className="my-5 grid grid-cols-2 md:grid-cols-4 items-start text-left">
        {footLists.map((item) => (
          <li key={item} className="text-xs md:text-xl mx-2">
            <h1 className="font-semibold text-2xl mb-3">{item.title}</h1>
            {item.lists.map((list) => (
              <>
                <p key={list} className="p-0.5 font-normal">
                  {list}
                </p>
                {item.title === "Support" && (
                  <div className="flex gap-2 mt-4">
                    <IoLogoInstagram size={25} />
                    <IoLogoFacebook size={25} />
                    <IoLogoLinkedin size={25} />
                    <IoMail size={25} />
                  </div>
                )}
              </>
            ))}
          </li>
        ))}
      </ul>
      <hr className="w-full border-2 my-5 md:my-16 border-gray-800" />
      <div className="flex-center gap-5 font-normal">
        <p className="text-xs md:text-base" key={"1"}>
          Created by {""}
          <a
            href="https://github.com/frdmn12"
            target="_blank"
            className="hover:underline"
          >
            @frdmn12
          </a>
        </p>
        {"|"}
        <p className="text-xs md:text-base" key={"2"}>
          Shout out for @Casey Spirid for this amazing design
        </p>
        {"|"}
        <p className="text-xs md:text-base" key={"3"}>@2024</p>
      </div>
    </footer>
  );
};

export default Footer;
