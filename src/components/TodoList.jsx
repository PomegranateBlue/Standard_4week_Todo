const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todoList-container">
      <div className="working-container">
        <h2>Working...</h2>
        {todos.map((item) => (
          <li key={item.id}>
            title:{item.title} - content:{item.content}
            <button onClick={() => deleteTodo(item.id)}>제거</button>
          </li>
        ))}
      </div>
      <div className="done-container">
        <h2>Done!</h2>
      </div>
    </div>
  );
};

export default TodoList;
