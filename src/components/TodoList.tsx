import React from 'react'

import "./styles.css"
import type { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface TodoListProps {

  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos}: TodoListProps) => {
  return (
    
    <div className="container">

      <div className="todos">

        <span className="todos__heading">Active Tasks</span>

        {todos.map(todo => (

          <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>
      <div className="todos remove">

      <span className="todos__heading">Completed Tasks</span>

      {todos.map(todo => (

      <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
      </div>
    </div>
  )
}

export default TodoList