import { useLocation } from 'react-router-dom'
import { ProjectAttribute, ProjectDescription, ProjectName } from  './personal-project-side-page.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { ProjectCard } from '../personal-projects-main-page/projects-main.styles'

const ProjectSidePage = () => {
    const location = useLocation()
    const project  = location.state
    console.log(project);
    return (
        <ProjectDescription>
            <ProjectName>{ project.name }</ProjectName>
            <ProjectCard>
                <ProjectAttribute>{`Language: ${ project.mainLanguage}`}</ProjectAttribute>
                <ProjectAttribute>{`Frameworks/Technologies: ${ project.frameworks.join(", ")}`}</ProjectAttribute>
                <ProjectAttribute>{`Difficulty: ${project.difficulty }`}<FontAwesomeIcon icon={solid("star")} color="#FDCC0D"/></ProjectAttribute>
                <a href={project.link}>{project.link}</a>
                <h3>Description:</h3>
                <p>{project.description}</p>
            </ProjectCard>
        </ProjectDescription>
    )
}

export default ProjectSidePage;