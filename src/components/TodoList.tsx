import React from "react";

import "./styles.css";
import type { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface TodoListProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedTodos: Todo[]
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos, completedTodos }: TodoListProps) => {
  return (
    <div className="container">

      //we are passing unique droppableId to uniquely
      //identify droppable section

      <Droppable droppableId="activeTodosLists">
        {(provided, snapshot) => (

          <div className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`} ref={provided.innerRef}
          {...provided.droppableProps}
          >
        <span className="todos__heading">Active Tasks</span>

        {todos.map((todo, index) => (
          <SingleTodo
            key={todo.id}
            index={index}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
        )}
      </Droppable>
      
      <Droppable droppableId="completedTodosLists">

        {(provided, snapshot) => (

          <div className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`} ref={provided.innerRef}  
          {...provided.droppableProps}>
        <span className="todos__heading">Completed Tasks</span>

        {completedTodos.map((todo, index) => (
          <SingleTodo
            key={todo.id}
            index={index}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
