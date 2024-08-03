import { IoDocumentOutline, IoEarthSharp, IoGitPullRequest, IoGridOutline, IoMailSharp, IoRadioSharp, IoScan, IoSendSharp } from "react-icons/io5";
import Button from "./Button";
import Card from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);
const Highlights = () => {
    const scrollRef = useRef(null);

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        boxes.forEach((box, index) => {
            gsap.from(box, {
                scrollTrigger: {
                    trigger: box,
                    start: "top 90%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
                stagger: 1.3,
                y: 1,
                opacity: 0,
                duration: 1,
                delay: index * 0.1,
            });
        });

    }, [])

  return (
    <section className="py-2 mx-5 mt-7 text-white flex-center flex-col gap-2">
      <h1 className="text-xl md:text-6xl md:px-96 font-semibold font-sf-pro-display text-center">
        Spend less time looking for work
      </h1>
      <p className="text-gray-1 my-2 text-center">
        We&apos;ll help you through the hardest part of your job search.
      </p>
      <Button text="Create an Account" />
      <div
        id="card"
        className="grid grid-cols-1 md:grid-cols-3 my-5 md:my-3 gap-5  md:m-6 md:px-2 md:bg-transparent"
        ref={scrollRef}
      >
        <div className="card-item">
          <Card
            title={"Cover Latter"}
            description={
              "A cover letter is a document that accompanies a job application and is written to introduce the applicant to the employer."
            }
            icon={<IoDocumentOutline size={20} />}
          />
        </div>
        <div className="card-item">
          <Card
            title={"Resignation Letters"}
            description={
              "A resignation letter is a formal document that an employee writes to inform their employer of their decision to leave the company."
            }
            icon={<IoMailSharp  size={20} />}
          />
        </div>
        <div className="card-item">
          <Card
            title={"Connection Request"}
            description={
              "A connection request is a message sent on a social networking site, such as LinkedIn, requesting to connect with another user."
            }
            icon={<IoGitPullRequest   size={20} />}
          />
        </div>
        <div className="card-item">
          <Card
            title={"Outreach Emails"}
            description={
              "Outreach emails are messages sent by individuals or businesses to introduce themselves, establish a connection, or propose a collaboration."
            }
            icon={<IoSendSharp  size={20} />}
          />
        </div>
        <div className="card-item">
          <Card
            title={"Resume Optimization"}
            description={
              "Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users."
            }
            icon={<IoGridOutline size={20} />}
          />
        </div>
        <div className="card-item">
          <Card
            title={"Resume Design"}
            description={
              "A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes."
            }
            icon={<IoEarthSharp  size={20} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
