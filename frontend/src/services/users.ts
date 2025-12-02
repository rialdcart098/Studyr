import axios from 'axios'
const url = '/api/users'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}
const create = async (newUser: object) => {
    const response = await axios.post(url, newUser)
    return response.data
}
export default { getAll, create }