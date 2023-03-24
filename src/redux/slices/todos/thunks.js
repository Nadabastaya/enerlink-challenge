import axios from 'axios'
import { getTodos, postTodo, patchTodo, deleteTodo } from './todosSlices'
import { toast } from 'react-toastify';

export const getTodosThunk = () =>   {
    return async (dispatch) =>    {
        try {
            const { data } = await axios.get('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos')
            dispatch(getTodos({data: data}))
        } catch (error) {
            toast.error('❌ Error trying get TODOs', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }
}

export const postTodoThunk = (todo) =>   {
    return async (dispatch) =>    {
        if (todo.label === '') return

        try {
            const { data } = await axios.post('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos', todo)
            dispatch(postTodo({data: data}))
        } catch (error) {
            toast.error('❌ Error trying create a new TODO', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }
}

export const patchTodoThunk = (id, checked) => {

    let check = checked ? '❌ Error trying mark this TODO' : '❌ Error trying unmark this TODO'

    return async (dispatch) =>  {
        try {
            const { data } = await axios.patch(`https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/${id}`, {checked: checked})
            dispatch(patchTodo({data: data}))
        } catch (error) {
            toast.error(check, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }
}

export const deleteTodoThunk = (id) =>    {
    return async (dispatch) =>  {
        try {
            const  { data } = await axios.delete(`https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/${id}`)
            dispatch(deleteTodo({data: data, id: id}))
        } catch (error) {
            toast.error('❌ Error trying delete this TODO', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        
    }
}
