const express = require('express')
const courseRouter = require('./controllers/courses')
const examRouter = require('./controllers/exams')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')
const middleware = require('./utils/middleware')
// const cors = require('cors')
// const path = require('path')

const app = express()
mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        logger.info('Connected to MongoDB')
    })
    .catch(err => {
        logger.error('Failed to connect to MongoDB', err)
    })

app.use(express.json())
app.use('/api/courses', courseRouter)
app.use('/api/exams', examRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app