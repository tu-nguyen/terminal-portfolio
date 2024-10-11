import projects from '../data/projects.json';
import Project from './Project';


const Projects = () => {
    return (
        <>
            {projects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </>
    );
};

export default Projects;