import { Routes, Route } from 'react-router-dom'
import MainPage from '../personal-projects-main-page/projects-main.components'
import ProjectSidePage from '../personal-project-side-page/personal-project-side-page.component'

const Project = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path=":project" element={<ProjectSidePage />} />
    </Routes>
  )
}

export default Project;
