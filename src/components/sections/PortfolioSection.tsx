import PortfolioCard from "../content/PortfolioCard";
import projects from "../../lib/projectData.json";

const PortfolioSection = () => {    
    return (
        <div className="flex flex-col items-center justify-center">
            {projects.projectData[0]?.projects?.map((project, i) =>
            <PortfolioCard project={project} key={i} />
            )}
        </div>
    );
};

export default PortfolioSection;
