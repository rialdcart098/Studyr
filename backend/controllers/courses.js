const courseRouter = require('express').Router()
const Course = require('../models/course')

courseRouter.get('/', async (request, response) => {
    const courses =  await Course
        .find({})
        .populate('Exams', {
            name: 1
        })
    response.json(courses)
})
courseRouter.post('/', async (request, response) => {
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
module.exports = courseRouter