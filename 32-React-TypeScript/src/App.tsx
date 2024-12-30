import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodoContextProvider from "./context/todos-context";

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
