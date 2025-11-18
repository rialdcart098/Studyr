require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const examSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    questions: {
        type: Array,
        required: true,
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