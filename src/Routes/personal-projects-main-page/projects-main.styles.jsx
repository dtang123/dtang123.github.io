import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProjectContainer = styled.div `
    margin: 50px;
    & .sortBy {
        margin: 10px 0 20px 0;
    }
    & .row {
        & .column {
            margin-bottom: 25px;
        }
    }
`

export const ProjectCard = styled.div  `
    background-color: silver;
    border-radius: 8px;
    padding: 20px;
    height: 100%;
`

export const ProjectLink = styled(Link) `
    text-decoration: none;
    color: #4169e1;
`