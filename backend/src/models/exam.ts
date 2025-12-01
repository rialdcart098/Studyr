import dotenv from 'dotenv'
dotenv.config()
import mongoose, { Document, Schema, Model } from 'mongoose'
mongoose.set('strictQuery', false)

interface IExam extends Document {
    name: string,
    course: mongoose.Types.ObjectId,
    questions: IQuestion[],
    rating: number
}

interface IQuestion {
    question: string,
    choices: { [key: string]: string },
    correct: number,
    image?: string | null
}

const questionSchema: Schema<IQuestion> = new Schema({
    question: { type: String, required: true },
    choices: {type: Map, of: String, required: true },
    correct: { type: Number, required: true },
    image: { type: String, default: null }
})

const examSchema: Schema<IExam> = new Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    },
    questions: [questionSchema],
    rating: {
        type: Number,
        default: 0
    },
})
examSchema.set('toJSON', {
    transform(_document: Document, returnedObject: any){
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})
const Exam: Model<IExam> = mongoose.model<IExam>('Exams', examSchema)
export default Exam