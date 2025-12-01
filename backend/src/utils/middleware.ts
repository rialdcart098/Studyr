import { info, error } from './logger.js'
import { type Request, type Response, type NextFunction } from 'express'

declare module 'express-serve-static-core' {
    interface Request {
        token?: string | null
    }
}

export const requestLogger = (request: Request, _response: Response, next: NextFunction) => {
    info('Method:', request.method)
    info('Path:', request.path)
    info('Body:', request.body)
    info('----------')
    next()
}

export const unknownEndpoint = (_request: Request, response: Response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
export const errorHandler = (err: any, _req: Request, res:Response, next: NextFunction) => {
    error(err.message)
    if (err.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message })
    } else if (err.name === 'MongoServerError' && err.message.includes('E11000 duplicate key error')) {
        return res.status(400).json({ error: 'username must be unique' })
    } else if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'invalid token' })
    } else if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'token expired' })
    }
    next(err)
}
export const tokenExtractor = (request: Request, response: Response, next: NextFunction) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        request.token = authorization.replace('Bearer ', '')
    } else {
        request.token = null
    }
    next()
}