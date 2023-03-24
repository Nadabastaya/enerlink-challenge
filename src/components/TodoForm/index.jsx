import { useState } from "react";
import './styles.css'
import { useDispatch } from 'react-redux'
import { postTodoThunk } from "../../redux/slices/todos/thunks";


const TodoForm = () => {

    const [todo, setTodo] = useState({
        id: 111,
        label: '',
        checked: false
    })

    const dispatch = useDispatch()
    const postTodo = () =>  {
        dispatch(postTodoThunk(todo))
    }

    const onKeyUp = event => {
       if(event.keyCode == 13) postTodo()
      };
    
    return (
        <div className="todo-form"   >
            <input type="text" 
                    className="todo-text" 
                    placeholder="Enter new to do"
                    onChange={(e) => setTodo({ ...todo, label: e.target.value })}
                    onKeyUp={onKeyUp}
                    />
            <button type="text" className="todo-button" onClick={postTodo}>ADD TO DO</button>
        </div>
    )
}

export default TodoForm;
