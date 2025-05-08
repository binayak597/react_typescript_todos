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
    <div className='todos'>

      {todos.map(t => (

        <SingleTodo key={t.id} todo = {t} todos={todos} setTodos={setTodos} />
      ))}


    </div>
  )
}

export default TodoList