import * as React from 'react';

import ProjectCard from '../content/ProjectCard';
import projects from '../../lib/projectData.json';

const ProjectSection = () => {
  return (
    <>
      {' '}
      <div className='z-0 mt-24 mb-24 h-full sm:mb-60'>
        {projects.projectData.map((data, i) => {
          return <ProjectCard key={i} props={data} />;
        })}
      </div>
    </>
  );
};

export default ProjectSection;
