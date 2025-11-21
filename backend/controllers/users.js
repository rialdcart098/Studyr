const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

userRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate({ path: 'exams.exam', select: 'name' })
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
userRouter.get('/:id', async (request, response) => {
    const user = await user.findById(request.params.id).populate({ path: 'exams.exam', select: 'name' })
    if (user) return response.json(user)
    return response.status(404).end()
})
userRouter.put('/:id', async (request, response) => {
  const { examId, grade } = request.body
  const user = await User.findByIdandUpdate(request.params.id, {

  })

})
module.exports = userRouter