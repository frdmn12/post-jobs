import { useRef } from "react";
import { about1 } from "../utils";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const scrollRef = useRef(null);

  useGSAP(() => {

    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box, index) => {
      gsap.from(box, {
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 10,
        opacity: 0,
        duration: 1,
        delay: index * 0.1,
      });
    });

  }, [])

  return (
    <section className=" p-2 md:p-10 bg-black">
      <div
        ref={scrollRef}
        className="bg-green-1 px-20 py-16 md:pb-0 mx-4 rounded-lg h-[30rem] md:h-[61rem] text-center items-center flex justify-between flex-col"
      >
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
