import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks.ts";
import type {Course, Exam} from "../../types.ts";
import Togglable from "../Togglable";
import {useState} from "react";

const Exam = ({ exam }: { id: string, name: string }) => {
    const [visible, setVisible] = useState(false)
    const examContent = useAppSelector(state => state.exams.find((e: Exam) => e.id === exam.id))
    const user = useAppSelector(state => state.auth)
    if (!examContent) return null
    return (
        <li>
            {exam.name}
            <Togglable buttonLabel="View Details" visible={visible} toggleVisibility={() => setVisible(!visible)}>
                <p>Rating: {examContent.rating}</p>
                <p>Number of Questions: {examContent.questions.length}</p>
                {user ? (
                    <Link to={`/exams/${exam.id}`}>Go to Exam Page</Link>
                ) : (
                    <Link to='/login'>Log in and take this exam!</Link>
                )}
            </Togglable>
        </li>
    )
}

const CoursePage = () => {
    const courseId = useParams().id
    const course = useAppSelector(state => state.courses.find((course: Course) => course.id === courseId))
    const user = useAppSelector(state => state.auth)
    if (!course) return null

    return (
        <div>
            <h2>{course.name}</h2>
            <p>Subject: {course.subject}</p>
            <p>Rigor: {course.rigor}</p>
            <h3>Exams</h3>
            <ul>
                {course.exams.map((exam: Exam) => (
                    <Exam exam={exam} key={exam.id} />
                ))}
            </ul>
        </div>
    )
}
export default CoursePage