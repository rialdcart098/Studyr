import express, { type Request, type Response, Router } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/user.js'
const loginRouter: Router = express.Router()


loginRouter.post('/', async (request: Request, response: Response) => {
    const { username, password } = request.body
    const user = await User.findOne({ username })
    const passwordCorrect = user
        ? bcrypt.compare(password, user.passwordHash)
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
    const key = process.env.SECRET
    if (!key) throw new Error('missing "SECRET" environment variable')
    const token = jwt.sign(userToken, key)
    response.status(200).send({ token, username: user.username, id: user._id })
})
export default loginRouter