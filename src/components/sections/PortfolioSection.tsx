import PortfolioCard from "../content/PortfolioCard";
import projects from "../../lib/projectData.json";

const PortfolioSection = () => {    
    return (
        <div>
            <h2 className='text-5xl font-semibold text-white text-center mb-12 underline underline-offset-8'>Projects</h2>
            {projects.projectData[0]?.projects?.map((project, i) =>
                <PortfolioCard project={project} key={i} />
            )}
        </div>
    );
};

export default PortfolioSection;
