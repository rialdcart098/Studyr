import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice'
import courseReducer from './reducers/courseSlice'
import examReducer from './reducers/examSlice'

const store = configureStore({
    reducer: {
        users: userReducer,
        courses: courseReducer,
        exams: examReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store