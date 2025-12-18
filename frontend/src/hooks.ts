import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import React, {useState} from "react";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useField = (type: string, name: string) => {
    const [value, setValue] = useState('')
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
    const clear = () => setValue('')
    return { type, value, onChange, name, clear }
}