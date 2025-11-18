const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

userRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('exams', { name: 1, grade: 1, subject: 1 })
    response.json(users)
})
userRouter.post('/', async (request, response) => {
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

module.exports = userRouter