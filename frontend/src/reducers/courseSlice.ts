import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type { AppDispatch } from '../store'
import courseService from '../services/courses'
import type { Course } from '../types'

const initialState: Course[] = [] as Course[]

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setCourses(_state, action: PayloadAction<Course[]>) {
            return action.payload
        },
        addCourse(state, action: PayloadAction<Course>) {
            state.push(action.payload)
        }
    }
})
const { setCourses, addCourse } = courseSlice.actions

export const initializeCourses = () => {
    return async (dispatch: AppDispatch) => {
        const courses: Course[] = await courseService.getAll()
        dispatch(setCourses(courses))
    }
}
export const createCourse = (course: Course) => {
    return async (dispatch: AppDispatch) => {
        dispatch(addCourse(course))
    }
}
export default courseSlice.reducer