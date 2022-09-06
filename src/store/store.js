import { configureStore } from '@reduxjs/toolkit'
import ProjectSlice  from './projects/projects.reducer'

export const store = configureStore({
    reducer: {
        projectSlice: ProjectSlice
    }
})