import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks.ts";

const ExamPage = () => {
    const examId = useParams().id
    const exam = useAppSelector(state => state.exams.find((exam: { id: string }) => exam.id === examId))\
    if (!exam) return null
    return (
        <div>
            <h2>Exam: {exam.name}</h2>
            <p>Rating: {exam.rating}</p>
            <p>Number of Questions: {exam.questions.length}</p>

        </div>
    )
}
export default ExamPage