import "../styles/TodoList.css";
import "./TodoItem";
const TodoList = ({ todos, setTodos }) => {
  const completeTodo = (id) => {
    const completeTodo = todos.find((item) => item.id === id);
    setCompleteTodos([...completeTodos, completeTodo]);
    setTodos(todos.filter((item) => item.id !== id));
  };
  const cancelTodo = (id) => {
    const cancelTodo = completeTodos.find((item) => item.id === id);
    setTodos([...todos, cancelTodo]);
    setCompleteTodos(completeTodos.filter((item) => item.id !== id));
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  return <div></div>;
};

export default TodoList;
