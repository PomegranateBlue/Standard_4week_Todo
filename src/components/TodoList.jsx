const TodoList = ({
  todos,
  setTodos,
  completeTodos,
  setCompleteTodos,
  deleteTodo,
}) => {
  const completeTodo = (id) => {
    const completeTodo = todos.find((item) => item.id === id);
    setCompleteTodos([...completeTodos, completeTodo]);
    setTodos(todos.filter((item) => item.id !== id));
  };
  const cancleTodo = (id) => {
    const cancleTodo = completeTodos.find((item) => item.id === id);
    setTodos([...todos, cancleTodo]);
    setCompleteTodos(completeTodos.filter((item) => item.id !== id));
  };
  return (
    <div className="todoList-container">
      <div className="working-container">
        <h2>Working...</h2>
        {todos.map((item) => (
          <li key={item.id}>
            title:{item.title} - content:{item.content}
            <button onClick={() => completeTodo(item.id)}>완료</button>
            <button onClick={() => deleteTodo(item.id)}>제거</button>
          </li>
        ))}
      </div>
      <div className="done-container">
        <h2>Done!</h2>
        {completeTodos.map((item) => (
          <li key={item.id}>
            title:{item.title} - content:{item.content}
            <button onClick={() => cancleTodo(item.id)}>취소</button>
            <button onClick={() => deleteTodo(item.id)}>제거</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
