import { useRef } from "react";
import { resume1 } from "../utils";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Resume = () => {
  const scrollRef = useRef(null);

//   useGSAP(() => {
//     const boxes = gsap.utils.toArray(scrollRef.current.children);

//     boxes.forEach((box, index) => {
//         gsap.from(box, {
//           scrollTrigger: {
//             trigger: box,
//             toggleActions: "play none none reverse",
//             start: "top 50%",
//             end: "top 20%",
//           },
//           stagger: 0.3,
//           x: index % 2 === 0 ? -70 : 70,
//           opacity: 0,
//         });
//       });
//   }, [])
  
  return (
      <section
        ref={scrollRef}
        className=" text-white p-16 grid grid-cols-1 md:grid-cols-2 gap-20 items-center "
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
          {/* <button
            className={`px-5 md:w-1/3 py-2 border border-black font-bold text-black hover:bg-black hover:text-green-1 rounded-xl m-1 text-xs md:text-base `}
          >
            Try For free Now
          </button> */}
          <Button text={"Create an Account"} />
        </div>
        <img src={resume1} className="w-full max-lg:hidden" alt="" />
      </section>
  );
};

export default Resume;
