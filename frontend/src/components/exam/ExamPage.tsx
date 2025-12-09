import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks.ts";

const Question = ({ question: object }) => {
    console.log(question)
    return (
        <div>
            <h4>{question.question}</h4>
            {question.image && <img src={`/questionIMG/algebra2/${question.image}`} alt="Question Image" />}
            <p>Options:</p>
            <ul>
                {Object.values(question.choices).map((choice: string) => (
                    <label key={choice}>
                        <input type="radio" name={question.question} value={choice} />
                        {choice}
                    </label>
                ))}
            </ul>
            <p>Correct Answer: {question.correct}</p>
        </div>
    )
}

const ExamPage = () => {
    const examId = useParams().id
    const exam = useAppSelector(state => state.exams.find((exam: { id: string }) => exam.id === examId))
    if (!exam) return null
    return (
        <div>
            {exam.questions.map((question) => (
                <Question question={question} key={question.question} />
            ))}
        </div>
    )
}
export default ExamPage