import React, { useRef } from "react";

import "./styles.css";

interface TodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (ev: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: TodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      action=""
      className="input"
      onSubmit={(ev) => {
        handleAdd(ev);
        inputRef.current?.blur(); //blur method automatically shift the focus from the reference element
      }}
    >
      <input
        type="text"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(ev) => setTodo(ev.target.value)}
        ref={inputRef}
      />

      <button type="submit" className="input_submit">
        go
      </button>
    </form>
  );
};

export default InputField;
