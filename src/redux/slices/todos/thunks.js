import axios from 'axios'
import { getTodos, postTodo, patchTodo, deleteTodo } from './todosSlices'

export const getTodosThunk = () =>   {
    return async (dispatch) =>    {
        const { data } = await axios.get('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos')
        dispatch(getTodos({data: data}))
        
    }
}

export const postTodoThunk = (todo) =>   {
    return async (dispatch) =>    {
        if (todo.label === '') return
        
        const { data } = await axios.post('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos', todo)
        dispatch(postTodo({data: data}))
      
    }
}

export const patchTodoThunk = (id, checked) => {
    return async (dispatch) =>  {
    
        
        console.log(!checked)

        const { data } = await axios.patch(`https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/${id}`, !checked)
        dispatch(patchTodo({data: data}))
    }
}

export const deleteTodoThunk = (id) =>    {
    return async (dispatch) =>  {
        const  data  = await axios.delete(`https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/${id}`)
        dispatch(deleteTodo({data: data}))
    }
}