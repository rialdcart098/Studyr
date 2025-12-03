import {useAppSelector} from "../../hooks.ts";
import type { RootState } from "../../store.ts";
import type { Course } from "../../types.ts";
import {Link} from "react-router-dom";

const Courses = () => {
    const courses = useAppSelector((state: RootState) => state.courses)
    if (!courses || courses.length === 0) return <div>Loading</div>
    return (
        <div>
            <h2>Courses</h2>
            <ul>
                {courses.map((course: Course) => (
                    <li key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.name}: {course.subject} ({course.rigor}) - ({course.exams.length} exams)</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Courses