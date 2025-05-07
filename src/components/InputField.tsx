import React from 'react'

import './styles.css'

interface TodoProps{

  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (ev: React.FormEvent) => void
}
const InputField = ({todo, setTodo, handleAdd}: TodoProps) => {
  return (
    <form action="" className='input' onSubmit={handleAdd}>

      <input 
      type="text"
      placeholder='Enter a task'
      className='input__box'
      value={todo}
      onChange={(ev) => setTodo(ev.target.value)}
      />

      <button type="submit" className='input_submit'>go</button>
    </form>
  )
}

export default InputField