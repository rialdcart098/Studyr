import dotenv from 'dotenv'
import mongoose, { Document, Schema, Model } from 'mongoose'
dotenv.config()

mongoose.set('strictQuery', false)

interface ICourse extends Document {
    name: string,
    subject: string,
    rigor: string,
    exams: mongoose.Types.ObjectId[]
}

const courseSchema: Schema<ICourse> = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    rigor: {
        type: String,
        required: true
    },
    exams: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exams'
        }
    ]
})
courseSchema.set('toJSON', {
    transform(_document: Document, returnedObject: any){
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})
const Course: Model<ICourse> = mongoose.model<ICourse>('Courses', courseSchema)
export default Course