import { useRef } from "react";
import { resume1 } from "../utils";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Resume = () => {
  const scrollRef = useRef(null);

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box, index) => {
      gsap.from(box, {
        scrollTrigger: {
          trigger: box,
          toggleActions: "play none none reverse",
          start: "top 80%",
          end: "top 20%",
        },
        stagger: 0.3,
        y: index % 2 === 0 ? -70 : 70,
        opacity: 0,
      });
    });
  }, []);

  return (
    <section
      ref={scrollRef}
      className=" text-white p-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center "
    >
      <div className="flex flex-col items-center md:items-start gap-5">
        <h1 className="text-center md:text-left font-bold md:font-semibold text-2xl md:text-5xl md:pr-36">
          Free AI cover letter generator powered by GPT
        </h1>
        <p className="text-base font-medium text-center md:text-left">
          A free AI cover letter generator powered by GPT is a tool that uses
          artificial intelligence and natural language processing to help job
          seekers create customized and effective cover letters.
        </p>
        <Button text={"Create an Account"} />
      </div>
        <img src={resume1} className="w-[50%] max-lg:hidden justify-self-center" alt="resume_img"  />
    </section>
  );
};

export default Resume;
