import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

import "simplebar-react/dist/simplebar.min.css";

import ImageModal from "./ImageModal";
import useToggle from "../hooks/useToggle";

const container = {
  offScreen: { opacity: 0 },
  onScreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
  variants: {
    offScreen: { opacity: 0, scale: 0.85 },
  },
};

type Props = {
  props: {
    section?: string;
    projects?: {
      title: string;
      content: {
        link: string;
        imageURL: string;
      };
    }[];
  }
};

const ProjectCard = ({ props }: Props) => {
  const [toggleIsOpen] = useToggle(false);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  const { projects, section } = props;

  return (
    <div
      ref={ref}
      className="mt-0 flex w-full flex-col items-center justify-center lg:mt-24 "
    >
      <h2 className="mt-12 mb-4 text-center text-4xl font-thin text-white lg:mb-12">
        {section && section}
      </h2>
      <div className=" mx-auto mt-2 mb-20 h-[1px] w-[50vw] bg-white"></div>

      <motion.div className="my-auto mx-auto grid h-full w-full grid-cols-1 gap-4 md:w-[65vw] md:grid-cols-2">
        {projects && projects.map((project, i) => {
          return project.content.link ? (
            <motion.div
              initial="offScreen"
              animate={
                inView
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3, delay: i * 0.2 },
                    }
                  : "offScreen"
              }
              variants={container.variants}
              className="flex flex-col justify-center"
              key={i}
            >
              <a
                href={project.content.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transtion-all mx-auto h-[90vw] w-[90vw] shadow-lg duration-300 ease-in-out hover:scale-105 sm:h-[70vw] sm:w-[70vw] md:h-[30vw] md:w-[30vw] "
              >
                <button className="relative z-0 h-full w-full">
                  <Image
                    src={getCloudinaryImageUrl(`${project.content.imageURL}`)}
                    alt={project.title}
                    fill={true}
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 45vw,"
                  />
                </button>
              </a>
              <div className="mx-auto mt-6 h-[1px] w-36 bg-white lg:w-72" />
              <h3 className="mt-2 mb-12 self-center text-center font-light text-white">
                {project.title}
              </h3>
            </motion.div>
          ) : (
            <motion.div
              initial="offScreen"
              animate={
                inView
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3, delay: i * 0.2 },
                    }
                  : "offScreen"
              }
              variants={container.variants}
              className="flex flex-col justify-center"
              key={i}
            >
              <div className="transtion-all mx-auto h-[90vw] w-[90vw] shadow-lg duration-300 ease-in-out hover:scale-105 sm:h-[70vw] sm:w-[70vw] md:h-[30vw] md:w-[30vw] ">
                <ImageModal project={project} isOpen={toggleIsOpen} />
              </div>
              <div className="mx-auto mt-6 h-[1px] w-36 bg-white lg:w-72" />
              <h3 className="mt-2 mb-12 self-center text-center font-light text-white">
                {project.title}
              </h3>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProjectCard;
