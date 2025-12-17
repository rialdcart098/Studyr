import express, { Router, type Request, type Response } from 'express'
import Exam from '../models/exam.js'
import Course from '../models/course.js'

const examRouter: Router = express.Router()

examRouter.get('/', async (_request: Request, response: Response) => {
    const exams = await Exam.find({})
        .populate('course', { name: 1 })
    response.json(exams)
})
examRouter.post('/', async (request: Request, response: Response) => {
    const { name, courseName } = request.body
    if (!(name && courseName)) return response.status(401).json({ error: "Add all details when making an exam" })
    const course = await Course.findOne({ name: courseName })
    if (!course) return response.status(404).json({ error: "Course not found" })
    console.log('course')
    const newExam = new Exam({
        name,
        course
    })
    const savedExam = await newExam.save()
    await savedExam.populate('course', { name: 1 })
    console.log('exams: ', course.exams)
    course.exams.push(savedExam._id)
    console.log(course)
    await course.save()
    return response.status(201).json(savedExam)
})
examRouter.get('/:id', async (request: Request, response: Response) => {
    const exam = await Exam.findById(request.params.id)
        .populate('course', { name: 1 })
    if (exam) return response.json(exam)
    return response.status(404).end()
})
examRouter.put('/:id', async (request, response) => {
    const { question } = request.body
    const updatedExam = await Exam.findByIdAndUpdate(
        request.params.id,
        { $push: { questions: question } },
        { new: true }
    ).populate('course', { name: 1 })
    if (updatedExam) return response.status(201).json(updatedExam)
    return response.status(404).end()
})
export default examRouter