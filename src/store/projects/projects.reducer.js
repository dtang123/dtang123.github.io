import {projectData} from './data/projects-json'
import { createSlice } from '@reduxjs/toolkit'

export const PROJECTS_INITIAL_STATE = {
    projects: projectData,
    projectsSorted: {
        "": projectData,
    },
}

export const ProjectSlice = createSlice({
    name: "projects",
    initialState: PROJECTS_INITIAL_STATE,
    reducers: {
        sortByDifficulty(state) {
            state.projectsSorted = {"": state.projects.sort((a, b) => {return b.difficulty - a.difficulty})}
        },
        sortByType(state) {
            const object = {}
            const categories = [ ...new Set(state.projects.map(project => project.type))]
            categories.map(category => (
                object[category] = state.projects.filter(project => project.type === category)
            ))
            return {...state, projectsSorted: object}
        },
        sortByLanguage(state) {
            const object = {}
            const categories = [ ...new Set(state.projects.map(project => project.mainLanguage))]
            categories.map(category => (
                object[category] = state.projects.filter(project => project.mainLanguage === category)
            ))
            return {...state, projectsSorted: object}
        },
        originalView(state) {
            state.projectsSorted = {
                "": projectData,
            }
        }
    }}
)


export default ProjectSlice.reducer;
export const { sortByDifficulty, sortByType, sortByLanguage, originalView } = ProjectSlice.actions