import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import {useAppDispatch, useAppSelector} from './hooks'
import Courses from './components/courses/Courses.tsx'
import ExamPage from "./components/exam/ExamPage.tsx";
import Course from './components/courses/CoursePage.tsx'
import { initializeUsers } from './reducers/userSlice'
import { initializeCourses } from './reducers/courseSlice'
import {initializeExams} from "./reducers/examSlice.ts";
import {logout, setUser} from './reducers/authSlice'
import LoginPage from "./components/login/LoginPage.tsx";
function App() {
    const dispatch = useAppDispatch()
    const auth = useAppSelector(state => state.auth)
    useEffect(() => {
        dispatch(initializeUsers())
        dispatch(initializeCourses())
        dispatch(initializeExams())
        const loggedUserJSON = window.localStorage.getItem('user')
        if (loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            dispatch(setUser(user))
        }
    }, [dispatch])
    return (
        <Router>
            Studyr
            <Routes>
                <Route path='/courses' element={<Courses />} />
                <Route path='/courses/:id' element={<Course />} />
                <Route path='/exams/:id' element={<ExamPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
            <Link to='/courses'>Courses</Link>
            {auth ? (
                <button onClick={() => dispatch(logout())}>Log Out</button>
            ) : (
                <Link to='/login'>Login</Link>
            )}
        </Router>
    )
}

export default App
