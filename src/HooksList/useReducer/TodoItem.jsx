export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo}) => {
    return (
        <>
            <li>
                <span
                className={`${(todo.done) ? 'success-box' : ''}`}
                onClick={() => onToggleTodo(todo.id)}
                >{todo.description}</span>
                <button
                className="btn error-box"
                onClick={() => onDeleteTodo(todo.id)}
                >delete</button>
            </li>
        </>
    )
}