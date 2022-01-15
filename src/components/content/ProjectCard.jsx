import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import useOutsideClick from '../hooks/useOutsideClick';
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
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (isOpen) toggleIsOpen(false);
    });

    // const coverImage = props.projects.filter(
    //     (project, i) => project && i === 0
    // );
    return (
        <>
            <div
                style={{ backgroundColor: `${props.bgColor}` }}
                ref={ref}
                className={` m-0 py-4 skew-y-12 + ${
                    isOpen
                        ? 'h-[140vh] sm:h-[70vh] transition-all duration-400 ease-in-out'
                        : 'h-24 transition-all delay-100 duration-150 ease-in-out '
                }`}
            >
                <button onClick={toggleIsOpen} className='z-50 w-full'>
                    <h2 className='relative z-20 my-4 text-4xl font-semibold text-center text-white transform rotate-12 -skew-y-12'>
                        {props.section}
                    </h2>
                </button>
                <div className='flex z-0 flex-col justify-center my-12 sm:flex-row'>
                    {props.projects.map((project, i) => {
                        return (
                            <>
                                <Link
                                    href={project.content.link}
                                    key={i}
                                    passHref
                                >
                                    <a
                                        className={`rounded-lg bg-white -skew-y-12  shadow-lg p-4 sm:p-[2vw] m-4 hover:scale-105 + ${
                                            isOpen
                                                ? 'transition  ease-in-out opacity-100 '
                                                : 'transition delay-0 opacity-0 '
                                        } `}
                                    >
                                        <button
                                            className={`relative w-[80vw] h-[80vw] sm:w-[20vw] sm:h-[20vw]  + ${
                                                isOpen
                                                    ? 'transition delay-200 ease-in-out opacity-100 '
                                                    : 'transition delay-0 ease-in-out opacity-0 mt-0'
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
                            </>
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
