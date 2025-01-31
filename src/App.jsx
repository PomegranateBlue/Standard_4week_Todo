import "./App.css";
import { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "test Title",
      content: "test Content",
    },
  ]);

  console.log(todos);
  return (
    <div>
      <h1>TODO LIST</h1>
      <div className="form-container">
        <form>
          <label>제목</label>
          <input type="text"></input>
          <label>내용</label>
          <input type="text"></input>
          <button>추가</button>
        </form>
      </div>
      <div className="todoList-container">
        <div className="working-container">
          <h2>Working...</h2>
          {todos.map((item) => (
            <li key={item.id}>
              title:{item.title} - content:{item.content}
            </li>
          ))}
        </div>
        <div className="done-container">
          <h2>Done!</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
