import * as React from 'react';

import ProjectCard from '../content/ProjectCard';
import projects from '../../lib/projectData.json';

const ProjectSection = () => {
  return (
    <div className='z-50 mt-60 w-screen border-t-[1px] border-t-indigo-600 bg-indigo-900/90'>
      <ProjectCard props={projects.projectData[0]} key={0} />;
      <ProjectCard props={projects.projectData[1]} key={1} />
      <ProjectCard props={projects.projectData[2]} key={2} />
    </div>
  );
};

export default ProjectSection;
