const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
    const { username, password } = request.body
    const user = await User.findOne({ username })
    const passwordCorrect = user
        ? bcrypt.compare(password, user.password)
        : false
    if (!(user && passwordCorrect)){
        return response.status(401).json({
            error: "invalid username or password"
        })
    }
    const userToken = {
        username: user.username,
        id: user._id
    }
    const token = jwt.sign(userToken, process.env.SECRET)
    response.status(200).send({ token, username: user.username, id: user._id })
})
module.exports = loginRouter