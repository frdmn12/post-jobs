import { info1, info2 } from "../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Animasi untuk tampilan desktop
      const boxes = gsap.utils.toArray(scrollRef.current.children);
      const boxes2 = gsap.utils.toArray(scrollRef2.current.children);

      boxes.forEach((box, index) => {
        gsap.from(box, {
          scrollTrigger: {
            trigger: box,
            toggleActions: "play none none reverse",
            start: "top 50%",
            end: "top 20%",
            once: true,
          },
          stagger: 0.3,
          x: index % 2 === 0 ? -70 : 70,
          opacity: 0,
        });
      });

      boxes2.forEach((box, index) => {
        gsap.from(box, {
          scrollTrigger: {
            trigger: box,
            toggleActions: "play none none reverse",
            start: "top 80%",
            end: "top 20%",
            once: true,
          },
          stagger: 0.3,
          x: index % 2 === 0 ? -70 : 70,
          opacity: 0,
        });
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Animasi untuk tampilan mobile
      const boxes = gsap.utils.toArray(scrollRef.current.children);
      const boxes2 = gsap.utils.toArray(scrollRef2.current.children);

      boxes.forEach((box) => {
        gsap.from(box, {
          scrollTrigger: {
            trigger: box,
            toggleActions: "play none none",
            start: "top 75%",
            end: "top 25%",
            once: true,
          },
          y: 50,
          opacity: 0,
        });
      });

      boxes2.forEach((box) => {
        gsap.from(box, {
          scrollTrigger: {
            trigger: box,
            toggleActions: "play none none",
            start: "top 75%",
            end: "top 25%",
            once: true,
          },
          y: 50,
          opacity: 0,
        });
      });
    });

    // Bersihkan media query listener saat komponen unmount
    return () => mm.revert();
  }, []);

  return (
    <section className="py-28 px-10 md:px-40 mt-7 bg-green-1 flex-center flex-col gap-20">
      <div
        ref={scrollRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center "
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
          <button
            className={`px-5 md:w-1/3 py-2 border border-black font-bold text-black hover:bg-black hover:text-green-1 rounded-xl m-1 text-xs md:text-base `}
          >
            Try For free Now
          </button>
        </div>
        <img
          src={info1}
          className="w-[35rem] max-lg:hidden justify-self-center"
          alt=""
        />
      </div>
      <div
        ref={scrollRef2}
        className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center "
      >
        <img
          src={info2}
          className="w-[35rem] max-lg:hidden justify-self-center"
          alt=""
        />
        <div className="flex flex-col items-center md:items-start gap-5">
          <h1 className="text-center md:text-left font-bold md:font-semibold text-2xl md:text-5xl md:pr-36">
            Optimize the keywords in your resume
          </h1>
          <p className="text-base font-medium text-center md:text-left">
            By optimizing keywords in your resume, you can increase your chances
            of getting noticed by recruiters and landing interviews for the jobs
            you want.
          </p>
          <button
            className={`px-5 md:w-1/3 py-2 border border-black font-bold text-black hover:bg-black hover:text-green-1 rounded-xl m-1 text-xs md:text-base `}
          >
            Optimize your Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Info;
