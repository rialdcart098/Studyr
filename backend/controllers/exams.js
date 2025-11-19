const examRouter = require('express').Router()
const Exam = require('../models/exam')
const Course = require('../models/course')

examRouter.get('/', async (request, response) => {
    const exams = await Exam.find({})
        .populate('Courses', { name: 1 })
    response.json(exams)
})
examRouter.post('/', async (request, response) => {
    const { name, courseName } = request.body
    if (!(name && courseName)) return response.status(401).json({ error: "Add all details when making an exam" })
    const course = await Course.findOne({ name: courseName })
    console.log('course')
    const newExam = new Exam({
        name,
        course: course._id
    })
    console.log(newExam)
    const savedExam = await newExam.save()
    await savedExam.populate('Courses', { name: 1 })
    course.exams = course.exams.concat(savedExam)
    await course.save()
    return response.status(201).json(savedExam)
})
module.exports = examRouter