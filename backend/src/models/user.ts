import dotenv from 'dotenv'
import mongoose, { Document, Model, Schema } from 'mongoose'
dotenv.config()
mongoose.set('strictQuery', false)

interface IUser extends Document {
    username: string,
    passwordHash: string,
    exams: IExam[],
    admin: boolean
}

interface IExam {
    exam: mongoose.Types.ObjectId,
    grade: number
}

const examSchema: Schema<IExam> = new Schema({
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exams'
    },
    grade: {
        type: Number,
        required: true
    }
})

const userSchema: Schema<IUser> = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true
    },
    exams: [examSchema],
    admin: {
        type: Boolean,
        default: false
    }
})
userSchema.set('toJSON', {
    transform(_document: Document, returnedObject: any){
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    },
})
const User: Model<IUser> = mongoose.model<IUser>('Users', userSchema)
export default User