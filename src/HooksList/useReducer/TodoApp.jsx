import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { UseTodos } from "./hooks/useTodos"



export const TodoApp = () => {

  const {todos, todosCount, todosRemaining, handleNewTodo, handleDeleteTodo, handleToggleTodo} = UseTodos();

  

    return (
      <>
        <h1>todo App with useReducer</h1>
        <p>You can add, delete, and mark as complete. To mark as complete just clic in the todo name</p>
        <section className="todo">
          <div>
            <h2 >Todo List</h2>
          </div>
          <div>
            <h3>Todos: {todosCount}</h3>
            <h3>Remaining todos: {todosRemaining}</h3>
          </div>

          <article>
          <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
          /></article>

          <article>
          <TodoAdd onNewTodo={handleNewTodo}/>
          </article>

        </section>
      </>
    )
}