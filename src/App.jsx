import { useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "test title",
      content: "test content",
    },
  ]);

  return (
    <div>
      <h1>TODO LIST</h1>
      <div className="inputForm">
        <label>제목</label>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <label>내용</label>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button>추가</button>
        <div className="working-carousel">
          {todo.map((item) => (
            <li key={item.id}>
              title:{item.title} content:{item.content}
            </li>
          ))}
        </div>
        <div className="done-carousel"></div>
      </div>
    </div>
  );
}

export default App;
