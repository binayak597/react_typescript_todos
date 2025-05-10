import React, { useEffect, useRef, useState } from "react";
import type { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import "./styles.css";
import { Draggable } from "react-beautiful-dnd";

interface SingleTodoProps {
  index: number
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({ index, todo, todos, setTodos }: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit) {
      editInputRef.current?.focus();
    }
  }, [edit]);

  const handleDone = (todoId: number) => {
    // setTodos(todos.map(todo => todo.id === todoId? {...todo, isDone: !todo.isDone}: todo ))

    setTodos((prevTodos: Todo[]): Todo[] => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isDone: !todo.isDone };
        } else return todo;
      });

      return updatedTodos;
    });
  };

  const handleDelete = (todoId: number) => {
    setTodos((prevTodos: Todo[]): Todo[] => {
      const updatedTodos = prevTodos .filter((todo) => todo.id !== todoId);

      return updatedTodos;
    });
  };

  const handleEdit = (ev: React.FormEvent, todoId: number) => {
    ev.preventDefault();

    setTodos((prevTodos: Todo[]): Todo[] => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, todo: editTodo };
        else return todo;
      });

      return updatedTodos;
    });

    setEdit(false);
  };

  return (

    //for draggable component we are passing the unique index value
    //to perform the drag operation for individual component
    <Draggable draggableId={todo.id.toString()} index={index} >

      {(provided) => (

        <form
      action=""
      className="todos__single"
      onSubmit={(ev) => handleEdit(ev, todo.id)}

      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(ev) => setEditTodo(ev.target.value)}
          className="todos__single--text"
          ref={editInputRef}
        />
      ) : todo.isDone ? (
        //s stands for strike tag
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            //editing mode is not true yet
            //and todo has not striked it out by user
            //then only i will allow the user for editing
            if (!edit && !todo.isDone) setEdit(true);
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
