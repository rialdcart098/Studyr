import {useAppDispatch, useField } from '../../hooks'
import { login } from '../../reducers/authSlice'
import TextInput from '../TextInput'
import React from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const dispatch = useAppDispatch()
    const { clear: clearUsername, ...username } = useField('text', 'username')
    const { clear: clearPassword, ...password } = useField('password', 'password')
    const navigate = useNavigate()

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault()
        if (username.value.length <= 0 || password.value.length <= 0){
            clearUsername(); clearPassword()
            return
        }
        try {
            await dispatch(login(username.value, password.value))
            navigate('/')
        } catch {
            clearUsername(); clearPassword()
            // wrong details
        }
    }
    return (
        <form onSubmit={handleLogin}>
            <TextInput {...username} />
            <TextInput {...password} />
            <button type="submit">login</button>
        </form>
    )
}
export default LoginPage