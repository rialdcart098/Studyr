import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks.ts";
import type {PropTypes} from "../../types.ts";
import {useState} from "react";

interface Question {
        _id: string,
        question: string,
        image?: string,
        choices: { [key: string]: string },
        correct: string,
}

interface QuestionProp extends PropTypes {
    question: Question
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
            {question.image && <img src={`./questionIMG/algebra2/${question.image}.png`} alt="Question Image" />}
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
    const [score, setScore] = useState(0)
    const examId = useParams().id
    const exam = useAppSelector(state => state.exams.find((exam: { id: string }) => exam.id === examId))
    if (!exam) return null
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (Object.keys(userChoices).length < exam.questions.length) {
            console.log('Finish all questions');
        }
        else {
            const getScore = Object.entries(userChoices).reduce((acc, [questionId, choice]) => {
                const correctAnswer = exam.questions.find((q: Question) => q._id === questionId)?.correct
                console.log(String(correctAnswer) === choice)
                if (choice === String(correctAnswer)) acc++
                return acc
            }, 0)
            setScore((getScore / exam.questions.length) * 100)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>Your Score: {score}%</p>
            {exam.questions.map((question: Question) => (
                <Question question={question} key={question._id} userChoices={userChoices} setUserChoices={setUserChoices} />
            ))}
            <button type="submit">Finish</button>
        </form>
    )
}
export default ExamPage