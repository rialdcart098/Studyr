import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks.ts";
import type {PropTypes} from "../../types.ts";
import {useState} from "react";

interface QuestionProp extends PropTypes {
    question: {
        _id: string,
        question: string,
        image?: string,
        choices: { [key: string]: string },
        correct: string,
    }
    userChoices: { [key: string]: string }
    setUserChoices: (choices: { [key: string]: string }) => void
}

const Question = (props: QuestionProp) => {
    const question = props.question
    const changeChoice = (choice: string) => {
        const newChoices = { ...props.userChoices, [question._id]: choice }
        props.setUserChoices(newChoices)
        console.log(props.userChoices)
    }
    return (
        <div>
            <h4>{question.question}</h4>
            {question.image && <img src={`/questionIMG/algebra2/${question.image}`} alt="Question Image" />}
            <p>Options:</p>
            <ul>
                {Object.entries(question.choices).map((choice: string) => (
                    <label key={choice}>
                        <input type="radio" name={question.question} value={choice} onClick={() => changeChoice(choice[0])} />
                        {choice}
                    </label>
                ))}
            </ul>
            <p>Correct Answer: {question.correct}</p>
        </div>
    )
}

const ExamPage = () => {
    const [userChoices, setUserChoices] = useState<{ [key: string]: string }>({})
    const examId = useParams().id
    const exam = useAppSelector(state => state.exams.find((exam: { id: string }) => exam.id === examId))
    if (!exam) return null
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (Object.keys(userChoices).length < exam.questions.length) {
        }
        else {
            console.log('done!')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            {exam.questions.map((question) => (
                <Question question={question} key={question.question} userChoices={userChoices} setUserChoices={setUserChoices} />
            ))}
            <button type="submit">Finish</button>
        </form>
    )
}
export default ExamPage