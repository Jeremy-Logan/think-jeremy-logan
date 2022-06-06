import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import 'simplebar-react/dist/simplebar.min.css';

import ImageModal from '../content/ImageModal';
import useToggle from '../hooks/useToggle';

const imageVariant = {
  onScreen: {
    opacity: 1,
    transition: { delay: 0.05, ease: 'easeInOut', duration: 0.05 },
  },
  offScreen: {
    opacity: 0,
    transition: { delay: 0, ease: 'easeInOut', duration: 0.05 },
  },
};

const ProjectCard = ({ props }) => {
  const [toggleIsOpen] = useToggle(false);
  const control = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.25,
    initialInView: false,
  });

  useEffect(() => {
    if (inView) {
      control.start('onScreen');
    } else {
      control.start('offScreen');
    }
  }, [control, inView]);

  return (
    <div className='flex w-screen flex-col justify-center lg:my-24'>
      <h2 className='mt-12 mb-4 text-center text-4xl font-thin text-white lg:mb-12'>
        {props.section}
      </h2>
      <div className='z-50 mx-auto mt-2 mb-20 h-[1px] w-[50vw] bg-white'></div>

      <motion.div
        ref={ref}
        className='my-auto mx-auto grid h-full w-screen gap-4 md:w-[65vw] md:grid-cols-2'
      >
        {props.projects.map((project, i) => {
          return project.content.link ? (
            <div className='flex flex-col justify-center' key={i}>
              <motion.a
                href={project.content.link}
                variants={imageVariant}
                initial='offScreen'
                animate={control}
                target='_blank'
                rel='noopener noreferrer'
                className='transtion-all mx-auto h-[90vw] w-[90vw] shadow-lg duration-300 ease-in-out hover:scale-105 sm:h-[70vw] sm:w-[70vw] md:h-[30vw] md:w-[30vw] '
              >
                <button className='relative z-0 h-full w-full'>
                  <Image
                    src={project.content.imageURL}
                    alt={project.title}
                    layout='fill'
                    objectFit='cover'
                  />
                </button>
              </motion.a>
              <div className='mx-auto mt-6 h-[1px] w-36 bg-white lg:w-72' />
              <h3 className='mt-2 mb-12 self-center text-center font-light text-white'>
                {project.title}
              </h3>
            </div>
          ) : (
            <div className='flex flex-col justify-center' key={i}>
              <motion.div
                variants={imageVariant}
                initial='offScreen'
                animate={control}
                target='_blank'
                rel='noopener noreferrer'
                className='transtion-all mx-auto h-[90vw] w-[90vw] shadow-lg duration-300 ease-in-out hover:scale-105 sm:h-[70vw] sm:w-[70vw] md:h-[30vw] md:w-[30vw] '
              >
                <ImageModal project={project} isOpen={toggleIsOpen} />
              </motion.div>
              <div className='mx-auto mt-6 h-[1px] w-36 bg-white lg:w-72' />
              <h3 className='mt-2 mb-12 self-center text-center font-light text-white'>
                {project.title}
              </h3>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProjectCard;
