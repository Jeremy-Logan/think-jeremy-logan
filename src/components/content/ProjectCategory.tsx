import "simplebar-react/dist/simplebar.min.css";
import NewProjectCard from "./NewProjectCard";                                                                                                    



type Props = {
        
        section?: string;
        projects?: {
            title: string;
            id: string;
            content: {
                link: string;
                imageURL: string;
                description: string;
            };
        }[]; 
};


const ProjectCategory = ( props : Props) => {

    return (<section className='my-12' >
        <h2 className='text-center text-white text-3xl font-thin'>{props.section}</h2>
        <div className='grid grid-cols-2 gap-10 max-w-7xl mx-auto' >
            {props.projects?.map((project) => <NewProjectCard 
            key={project.id}  {...project} />)}
        </div></section>
    );
};

export default ProjectCategory;
