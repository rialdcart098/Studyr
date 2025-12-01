import express from 'express'
import courseRouter from './controllers/courses.js'
import examRouter from './controllers/exams.js'
import userRouter from './controllers/users.js'
import mongoose from 'mongoose'
import { error, info } from './utils/logger.js'
import { MONGODB_URI } from './utils/config.js'
import { unknownEndpoint, errorHandler } from './utils/middleware.js'
// const cors = require('cors')
// const path = require('path')

const app = express()
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        info('Connected to MongoDB')
    })
    .catch(err => {
        error('Failed to connect to MongoDB', err)
    })

app.use(express.json())
app.use('/api/courses', courseRouter)
app.use('/api/exams', examRouter)
app.use('/api/users', userRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

export default app