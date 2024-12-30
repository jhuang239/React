import TodoItem from "./TodoItem";
import classes from "./css/Todos.module.css";
import { useContext } from "react";
import { TodoContext } from "../context/todos-context";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => {
        return (
          <TodoItem key={item.id} text={item.text} id={item.id} removeTodo={todoCtx.removeTodo.bind(null, item.id)} />
        );
      })}
    </ul>
  );
};

export default Todos;
