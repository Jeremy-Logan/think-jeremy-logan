import * as React from "react";

import ProjectCard from "../content/ProjectCard";
import projects from "../../lib/projectData.json";

const ProjectSection = () => {
  return (
    <div className="z-50 mt-60 w-screen border-t-[1px] border-t-indigo-600 bg-indigo-900/90">
      {projects.projectData.map((project, index) =>
        project && <ProjectCard props={project} key={index} />
      )}
    </div>
  );
};

export default ProjectSection;


