import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todos', 
    initialState: {
        data: [],
    },
    reducers: {
        getTodos: (state, action) => {
            state.data = [action.payload.data]
        },
        postTodo: (state, action) =>    {
            state.data[0].push(action.payload.data)
        },
        patchTodo: (state, action) =>   {
            state.data.checked = [action.payload.checked]
        },
        deleteTodo: (state, action) =>  {
            state.data.filter(todo => todo !== action.payload)
            
        }
    }
})

export const { getTodos, postTodo, patchTodo, deleteTodo } = todosSlice.actions

export default todosSlice