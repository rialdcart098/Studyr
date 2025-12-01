import express, {Router, type Request, type Response } from 'express'
import Course from '../models/course.js'

const courseRouter: Router = express.Router()

courseRouter.get('/', async (request: Request, response: Response) => {
    const courses =  await Course
        .find({})
        .populate('exams', {
            name: 1
        })
    response.json(courses)
})
courseRouter.post('/', async (request: Request, response: Response) => {
    const { name, subject, rigor } = request.body
    if (!(name && subject && rigor)) return response.status(401).json({ error: "Add all details when creating a course" })
    const newCourse = new Course({
        name,
        subject,
        rigor
    })
    const savedCourse = await newCourse.save()
    return response.status(201).json(savedCourse)
})
courseRouter.get('/:id', async (request: Request, response: Response) => {
    const course = await Course.findById(request.params.id)
        .populate('exams', {
            name: 1
        })
    if (course) return response.json(course)
    return response.status(404).end()
})
export default courseRouter