import axios from 'axios'
import type {Exam} from "../types.ts";
const url = '/api/exams'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
} // arbitrary
const create = async (newExam: Exam) => {
    const response = await axios.post(url, newExam)
    return response.data
}
const getById = async (id: string) => {
    const response = await axios.get(`${url}/${id}`)
    return response.data
}
export default {
    getAll,
    getById,
    create
}