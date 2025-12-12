import React from 'react'
export interface PropTypes {
    children: React.ReactNode
}


export interface Course {
    name: string,
    subject: string,
    rigor: string,
    exams: object[]
    id: string
}
export interface User {
    username: string,
    exams: object[]
    id: string
    admin: boolean
}
export interface Exam {
    id: string
    name: string
    questions: object[]
    rating: number
    course: object
}
