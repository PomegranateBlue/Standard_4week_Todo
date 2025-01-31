import { useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: Date.now(),
      title: "test",
      content: "test",
    },
  ]);
  console.log(todo);
  //할 일 목록의 useState, 추가하는 useState는 별도 생성

  const [newTodo, setNewTodo] = useState({
    id: Date.now(),
    title: "",
    content: "",
  });

  const addTodo = (e) => {
    e.preventDefault();
    setTodo((item) => [...item, newTodo]);
  };
  //추가 시 사용하는 상태
  return (
    <div>
      <h1>TODO LIST</h1>
      <div className="inputForm">
        <label>제목</label>
        <input
          type="text"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...todo, title: e.target.value })}
        ></input>
        <label>내용</label>
        <input
          type="text"
          value={newTodo.content}
          onChange={(e) => setNewTodo({ ...todo, content: e.target.value })}
        ></input>
        <button onClick={addTodo}>추가</button>
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
