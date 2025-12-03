import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '../store'
import examService from '../services/exams'
import type { Exam } from '../types'

const initialState: Exam[] = []

const examSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setExams(_state, action: PayloadAction<Exam[]>) {
            return action.payload
        },
        addExam(state, action: PayloadAction<Exam>) {
            state.push(action.payload)
        }
    }
})
const { setExams, addExam } = examSlice.actions

export const initializeExams = () => {
    return async (dispatch: AppDispatch) => {
        const users = await examService.getAll()
        dispatch(setExams(users))
    }
}
export const newExam = (exam: Exam) => {
    return async (dispatch: AppDispatch) => {
        const newExam = await examService.create(exam)
        dispatch(addExam(newExam))
    }
}
export default examSlice.reducer