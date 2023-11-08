import * as React from "react";

import ProjectCategory from "../content/ProjectCategory";
import projects from "../../lib/projectData.json";

const ProjectSection = () => {
  return (
    <div className=" mt-60 pb-12 mx-auto w-screen border-t-[1px] border-t-indigo-600 bg-indigo-900/90">
      {projects.projectData.map((project, i) =>
        project && <ProjectCategory {...project} key={i} />
      )}
    </div>
  );
};

export default ProjectSection;


