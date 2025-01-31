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

  const addTodo = (e) => {
    e.preventDefault();
    //input에 입력한 title, content가 각각 들어가야함
    const newTodo = {
      id: Date.now(),
      title,
      content,
    };
    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <div className="inputForm">
        <label>제목</label>
        <input
          type="text"
          value={newTodo.title}
          onChange={(e) =>
            setNewTodo((item) => ({ ...item, title: e.target.value }))
          }
        ></input>
        <label>내용</label>
        <input
          type="text"
          value={newTodo.content}
          onChange={(e) =>
            setNewTodo((item) => ({ ...item, content: e.target.value }))
          }
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
