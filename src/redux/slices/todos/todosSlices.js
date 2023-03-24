import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todos', 
    initialState: {
        data: [],
        counter: 0,
    },
    reducers: {
        getTodos: (state, action) => {
            state.data = [action.payload.data]
        },
        postTodo: (state, action) =>    {
            state.data[0].push(action.payload.data)
        },
        patchTodo: (state, action) =>   {
            const todo = state.data[0].find((todo) => todo.id === action.payload.data.id)
            todo.checked = action.payload.data.checked
            todo.checked ? state.counter += 1 : state.counter -= 1
        },
        deleteTodo: (state, action) =>  {
            const index = state.data[0].filter(todo => todo.id !== action.payload.id) 
            
            const todo = state.data[0].find((todo) => todo.id === action.payload.id)
            if (todo.checked) state.counter -= 1
            state.data[0].splice(index, 1)
        }
    }
})

export const { getTodos, postTodo, patchTodo, deleteTodo } = todosSlice.actions

export default todosSlice