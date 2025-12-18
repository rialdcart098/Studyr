import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import loginService from '../services/login'
import type {AppDispatch} from "../store.ts"

const authSlice = createSlice({
    name: 'auth',
    initialState: null,
    reducers: {
        setUser(_state, action: PayloadAction) {
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
        window.localStorage.setItem('user', JSON.stringify(user))
        dispatch(setUser(user))
        return user
    }
}
export const logout = () => {
    return async (dispatch: AppDispatch) => {
        window.localStorage.removeItem('user')
        dispatch(clearUser())
    }
}
export { setUser }
export default authSlice.reducer