import { useEffect, useReducer } from "react";
import { TodoReducer } from "../todoReducer";


const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}


export const UseTodos = () => {

    const [todos, dispatchTodo] = useReducer(TodoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

        return () => {

        }
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatchTodo(action);
    }

    const handleDeleteTodo = (id) => {
        dispatchTodo({
            type: 'Delete Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatchTodo({
            type: 'Toggle Todo',
            payload: id
        })
    }

    const todosCount = todos.length
    const todosRemaining = todos.filter(todo => !todo.done).length



    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        todosRemaining
    }
}