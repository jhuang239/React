import classes from "./css/TodoItem.module.css";

type TodoItemProps = {
  id: string;
  text: string;
  removeTodo: () => void;
};

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <li className={classes.item} onClick={props.removeTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
