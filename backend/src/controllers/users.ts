import express, { Router, type Request, type Response} from "express";
const userRouter: Router = express.Router()
import User from '../models/user.js'
import Exam from '../models/exam.js'
import bcrypt from 'bcrypt'

userRouter.get('/', async (request: Request, response: Response) => {
    const users = await User.find({}).populate([
        { path: 'exams.exam', select: 'name' },
    ])
    response.json(users)
})
userRouter.post('/', async (request: Request, response: Response) => {
    const { username, password } = request.body
    if (!username || username.length < 3) return response.status(401).json({ error: 'Username must be at least 3 characters long' })
    if (!password || password.length < 8) return response.status(401).json({ error: 'Password must be at least 8 characters long' })

    const existingUser = await User.find({ username })
    if (existingUser.length > 0) return response.status(401).json({ error: 'Username already taken' })

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const user = new User({
        username,
        passwordHash
    })
    const savedUser = await user.save()
    return response.status(201).json(savedUser)
})
userRouter.get('/:id', async (request, response) => {
    const user = await User.findById(request.params.id).populate({ path: 'exams.exam', select: 'name' })
    if (user) return response.json(user)
    return response.status(404).end()
})
userRouter.put('/:id', async (request, response) => {
    const { examId, grade } = request.body
    const exam = await Exam.findById({ id: examId })
    if (!exam) return response.status(404).json({ error: 'Exam not found' })
    const user = await User.findByIdAndUpdate(request.params.id,
        { $push: { exams: { exam, grade } } },
        { new: true }
    ).populate({ path: 'exams.exam', select: 'name' })
    if (user) return response.json(user)
    return response.status(404).end()
})
export default userRouter