require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const examSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Courses'
        }
    ],
    questionLength: {
        type: Number,
        default: 0
    },
    questions: {
        type: Array,
        default: []
    }
})
examSchema.set('toJSON', {
    transform(document, returnedObject){
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})
module.exports = mongoose.model('Exams', examSchema)