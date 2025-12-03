import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from './hooks'
import Courses from './components/courses/Courses.tsx'
import Course from './components/courses/CoursePage.tsx'
import { initializeUsers } from './reducers/userSlice'
import { initializeCourses } from './reducers/courseSlice'
import {initializeExams} from "./reducers/examSlice.ts";
function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(initializeUsers())
        dispatch(initializeCourses())
        dispatch(initializeExams())
    }, [dispatch])
    return (
        <Router>
            Studyr
            <Routes>
                <Route path='/courses' element={<Courses />} />
                <Route path='/courses/:id' element={<Course />} />
                {/*<Route path='/exams/:id' element={<Exam />} />*/}
            </Routes>
            <Link to='/courses'>Courses</Link>
        </Router>
    )
}

export default App
