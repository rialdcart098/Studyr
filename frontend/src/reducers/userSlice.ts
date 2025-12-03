import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '../store'
import userService from '../services/users'
import type {User} from '../types'

const initialState: User[] = []

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(_state, action: PayloadAction<User[]>) {
            return action.payload
        },
        addUser(state, action: PayloadAction<User>) {
            state.push(action.payload)
        }
    }
})
const { setUsers, addUser } = userSlice.actions

export const initializeUsers = () => {
    return async (dispatch: AppDispatch) => {
        const users = await userService.getAll()
        dispatch(setUsers(users))
    }
}
export const signUp = (user: User) => {
    return async (dispatch: AppDispatch) => {
        const addNewUser = await userService.create(user)
        dispatch(addUser(addNewUser))
    }
}
export default userSlice.reducer