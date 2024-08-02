import { about1 } from "../utils";

const About = () => {
  return (
    <section className=" p-2 md:p-10 bg-black">
      <div className="bg-green-1 px-20 py-16 md:pb-0 mx-4 rounded-lg h-[30rem] md:h-[61rem] text-center items-center flex justify-between flex-col">
        <h1 className="text-black text-xl md:text-6xl md:px-96 font-semibold font-sf-pro-display">
          Submit Better job applications
        </h1>
        
        <h1 className="text-black text-4xl my-5 md:my-16 md:text-[8rem] font-semibold font-sf-pro-display">
          10 X faster
        </h1>
        <p className="text-black md:px-96">
          AI cover letter generator, resume keyword checker, outreach message
          writer, and more. Powered by GPT
        </p>
          <img
            src={about1}
            className="object-cover max-lg:hidden md:h-auto  md:w-full  "
            alt="about1"
          />
      </div>
    </section>
  );
};

export default About;
