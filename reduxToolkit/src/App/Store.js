import {configureStore} from '@reduxjs/toolkit'
import  todoreducers from '../Features/Todo/TodoSlice'

export const store = configureStore({
    reducer: todoreducers
})
// ✏️