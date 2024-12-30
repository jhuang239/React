import { useRef, useContext } from "react";
import classes from "./css/NewTodo.module.css";
import { TodoContext } from "../context/todos-context";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value; // Non-null assertion operator
    // const enteredText = todoTextInputRef.current?.value; // Optional chaining

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
