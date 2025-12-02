import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/users'

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        setUsers(_state, action) {
            return action.payload
        },
        addUser(state, action) {
            state.push(action.payload)
        }
    }
})
const { setUsers, addUser } = userSlice.actions

export const initializeUsers = () => {
    return async (dispatch) => {
        const users = await userService.getAll()
        dispatch(setUsers(users))
    }
}
export const signUp = (user) => {
    return async (dispatch) => {
        const addNewUser = await userService.create(user)
        dispatch(addUser(addNewUser))
    }
}
export default userSlice.reducer