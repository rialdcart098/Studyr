require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
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
    transform(document, returnedObject){
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})
module.exports = mongoose.model('Courses', courseSchema)