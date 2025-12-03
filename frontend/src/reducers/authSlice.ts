import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../types'
import type {AppDispatch} from "../store.ts";

const authSlice = createSlice({
    name: 'auth',
    initialState = null,
    reducers: {
        setUser(_state, action: PayloadAction<User>) {
            return action.payload
        },
        clearUser(){
            return null
        }
    }
})
const { setUser, clearUser } = authSlice.actions

export const login = (username: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        const user = await loginService.login({ username, password })
        window.localStorage.setItem('user', user)
        dispatch(setUser(user))
    }
}