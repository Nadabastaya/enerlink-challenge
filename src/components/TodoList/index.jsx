import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoThunk, getTodosThunk, patchTodoThunk } from "../../redux/slices/todos/thunks";
import TodoListItem from "components/TodoListItem";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./styles.css";

const TodoList = () => {

  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.todos)

  useEffect(() => {
    dispatch(getTodosThunk())

  })

  const handleDelete = (todoId) => {
    dispatch(deleteTodoThunk(todoId))
  };

  const toggleCheck = (todoId, isChecked) => {
    dispatch(patchTodoThunk(todoId, !isChecked))
  };

  const renderTodos = () => {
    return data[0]?.map(todo =>
      <li key={todo?.id}>
        <TodoListItem
          label={todo?.label}
          checked={todo?.checked}

          onCheck={() => toggleCheck(todo?.id, todo?.checked)}
          onDelete={() => handleDelete(todo?.id)}
        />
      </li>
    )
  }

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>

      {data[0]?.length !== 0 ?
        <div className="todo-list-content">
          <ul>
            {renderTodos()}
          </ul>
        </div>
        :
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      }
      <ToastContainer />
    </div>
  );
};

export default TodoList;
