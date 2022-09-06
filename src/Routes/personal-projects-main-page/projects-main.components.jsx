import { ProjectContainer, ProjectCard, ProjectLink } from "./projects-main.styles";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'
import { sortByDifficulty, sortByLanguage, sortByType, originalView } from "../../store/projects/projects.reducer";


const ProjectsMainPage = () => {
    const projectsSorted = useSelector((state) => state.projectSlice.projectsSorted)
    const dispatch = useDispatch()

    const changeSelect = (event) => {
        const dropdownObj = event.target
        const value = dropdownObj.options[dropdownObj.selectedIndex].value
        switch (value) {
            case "type-option":
                dispatch(sortByType())
                console.log(projectsSorted)
                break
            case "language":
                dispatch(sortByLanguage())
                console.log(projectsSorted)
                break
            case "difficulty":
                dispatch(sortByDifficulty())
                break
            case "original":
                dispatch(originalView())
                break
            default:
                return
        }
    }

    return (
        <ProjectContainer>
             <h1>
                My Personal Projects
            </h1>
            <label htmlFor="sortBy">Sort By: </label>
            <select className="sortBy" onChange={(event) => changeSelect(event)}>
                <option value="original">Original</option>
                <option value="type-option">Type</option>
                <option value="language">Language</option>
                <option value="difficulty">Difficulty</option>
            </select>
                {Object.keys(projectsSorted).map((key, index) => (
                    <div>
                        <h2>{`${key}`}</h2>
                        <Row className="row">
                            {projectsSorted[key].map(project => {
                                return (
                                <Col md={{ span: 4 }} className="column">
                                <ProjectLink to={{pathname: project.name, data: project }}>
                                    <ProjectCard>
                                        <h1>{`${ project.name }`}</h1> 
                                        <h4>{`Language: ${ project.mainLanguage}`}</h4>
                                        <h4>{`Frameworks/Technologies: ${ project.frameworks.join(", ")}`}</h4>
                                        <h4>{`Difficulty: ${project.difficulty }`}<FontAwesomeIcon icon={solid("star")} color="#FDCC0D"/></h4>
                                    </ProjectCard>
                                </ProjectLink>
                            </Col>) })
                            }
                                
                        </Row>
                    </div>)
                )  
            }
            
        </ProjectContainer>
    )
}

export default ProjectsMainPage;