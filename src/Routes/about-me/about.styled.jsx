import styled from 'styled-components'

export const PageContainer = styled.div`
    margin: 50px
`

export const EducationContainer = styled.div `
    margin-bottom: 50px;
`

export const SkillsContainer = styled(EducationContainer) `
    & .skill-row {
        & .skill {
            margin: 0 10px 20px 0;
            background-color: silver;
            border-radius: 5px;
        }
    }
`
