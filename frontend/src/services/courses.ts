import axios from 'axios'
const url = '/api/courses'
const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}
export default { getAll }