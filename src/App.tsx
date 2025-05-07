
import React, { useState } from 'react'
import InputField from './components/InputField'

import './App.css'

import type { Todo } from './model'


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (ev: React.FormEvent) => {

    ev.preventDefault()
    // console.log(todo)
    if(todo){

      setTodos([...todos, {
        id: Date.now(),
        todo,
        isDone: false
      }]);
      setTodo("")
    }
  }

  return (
    <div className='App'>

      <span className='heading'>Todos</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
    </div>
  )
}

export default App
