import Image from 'next/image';
import Link from 'next/link';

// import { useRef } from 'react';
import ImageModal from '../content/ImageModal';
// import useOutsideClick from '../hooks/useOutsideClick';
import useToggle from '../hooks/useToggle';

// export interface Welcome {
//     projectData: ProjectDatum[];
// }

// export interface ProjectDatum {
//     section:  string;
//     bgColor:  string;
//     projects: Project[];
// }

// export interface Project {
//     title:   string;
//     content: Content;
// }

// export interface Content {
//     link:     string;
//     imageURL: string;
// }

const ProjectCard = ({ props }) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  // const ref = useRef();

  // useOutsideClick(ref, () => {
  //     if (isOpen) toggleIsOpen(false);
  // });

  return (
    <>
      <div
        style={{ backgroundColor: `${props.bgColor}` }}
        // ref={ref}
        className={` + m-0 skew-y-12 py-4 ${
          isOpen
            ? 'duration-400 h-[170vh] transition-all ease-in-out sm:h-[40vh] lg:h-[50vh] 2xl:h-[70vh]'
            : 'h-24 transition-all delay-100 duration-150 ease-in-out '
        }`}
      >
        <button onClick={toggleIsOpen} className='z-50 w-full'>
          <h2 className='relative z-20 my-4 rotate-12 -skew-y-12 transform text-center text-4xl font-semibold text-white'>
            {props.section}
          </h2>
        </button>
        <div
          className={`+ z-0 my-12 flex flex-col justify-center sm:flex-row ${
            isOpen
              ? 'opacity-100 transition ease-in-out'
              : 'delay-0 opacity-0 transition'
          }`}
        >
          {props.projects.map((project, i) => {
            return project.content.link ? (
              <Link href={project.content.link} key={i} passHref>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`+ m-4 -skew-y-12  rounded-lg bg-white p-4 shadow-lg hover:scale-105 sm:m-2 sm:p-[2vw] xl:m-4 ${
                    isOpen
                      ? 'pointer-events-auto opacity-100 transition delay-100 ease-in-out'
                      : 'delay-0 pointer-events-none opacity-0 transition'
                  } `}
                >
                  <button
                    className={`+ relative z-0 h-[80vw] w-[80vw] sm:h-[18vw] sm:w-[18vw] ${
                      isOpen
                        ? 'opacity-100  transition delay-200 ease-in-out '
                        : 'delay-0  mt-0 opacity-0 transition ease-in-out'
                    }`}
                  >
                    <Image
                      src={project.content.imageURL}
                      alt={project.title}
                      layout='fill'
                      objectFit='cover'
                    />
                  </button>
                </a>
              </Link>
            ) : (
              <div key={i}>
                <div
                  className={`+ z-0 m-4  -skew-y-12 rounded-lg bg-white p-4 shadow-lg hover:scale-105 sm:p-[2vw] ${
                    isOpen
                      ? 'pointer-events-auto opacity-100 transition delay-100 ease-in-out'
                      : 'delay-0 pointer-events-none opacity-0 transition'
                  } `}
                >
                  <ImageModal project={project} isOpen={isOpen} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

{
  /* <Image src={(coverImage[0].content[1].imageLink)} alt={props.projects[0].title} width={480} height={480}/> */
}
