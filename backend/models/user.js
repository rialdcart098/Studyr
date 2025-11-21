require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true
    },
    exams: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exams'
        }
    ],
    admin: {
        type: Boolean,
        default: false
    }
})
userSchema.set('toJSON', {
    transform(document, returnedObject){
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    },
})
module.exports = mongoose.model('User', userSchema)