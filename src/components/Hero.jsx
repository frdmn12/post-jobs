import { IoDocumentOutline, IoRadioSharp, IoScan } from "react-icons/io5";
import Card from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const isMobile = window.innerWidth < 768;
  
  useGSAP(() => {
    // Animate the heading_hero_1 & heading_hero_2
    gsap.to("#heading_hero_1", {
      opacity: 1,
      delay: 0.5,
    });

    gsap.to("#heading_hero_2", {
      opacity: 1,
      delay: 1,
    });

    gsap.to("#desc_hero", {
      opacity: 1,
      delay: 1.5,
    });

    gsap.from(".card-item", {
    scrollTrigger: {
      trigger: "#card",
      start: isMobile ? "top 80%" : "top 80%",
      toggleActions:  isMobile ? "play none none reverse" : 'play',
      end: isMobile ? "top 20%" : "top 5%",
    }, 
      y: -20,
      delay: isMobile ? 0 : 2,
      stagger: 0.5,
      ease: "power1.out",
      opacity: 0,
    });
  }, []);

  return (
    <section className="w-full h-auto md:nav-height py-5">
      <div className="h-[45rem] md:h-3/6 w-full flex-center flex-col gap-2">
        <h1
          id="heading_hero_1"
          className="opacity-0 text-green-1 text-5xl md:text-7xl font-semibold font-sf-pro-display tracking-normal text-center px-11"
        >
          Win your dream job
        </h1>
        <h1
          id="heading_hero_2"
          className="opacity-0 text-white text-5xl md:text-7xl font-semibold font-sf-pro-display tracking-normal text-center"
        >
          with PostJob
        </h1>
        <p
          id="desc_hero"
          className="opacity-0 text-sm text-gray-1 text-center sm:px-28 md:text-md lg:px-[30rem]"
        >
          Submit better job app — 10x faster. AI cover letter generator, resume
          keyword checker, outreach message writer, and more. Powered by GPT
        </p>
      </div>
      <div
        id="card"
        className="flex-center gap-5 px-4 md:px-2 flex flex-wrap md:bg-transparent"
      >
        <div className="card-item">
          <Card
            title={"AI Cover Letter Generator"}
            description={
              "The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants."
            }
            icon={<IoDocumentOutline size={20} />}
          />
        </div>
        <div className="card-item">
          <Card
            title={"Smart Personalization"}
            description={
              "Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users."
            }
            icon={<IoRadioSharp size={20} />}
          />
        </div>
        <div className="card-item">
          <Card
            title={"Resume Scanner"}
            description={
              "A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes."
            }
            icon={<IoScan size={20} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
