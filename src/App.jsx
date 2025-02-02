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

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: title,
      content: content,
    };
    setTodos([...todos, newTodo]);
    resetForm();
  };
  console.log(todos);

  const deleteTodo = (id) => {
    //삭제 버튼을 누른 항목의 id 조회
    //해당 id를 제외한 todos 목록 업데이트
    setTodos(todos.filter(({ item }) => item.id !== id));
  };
  const resetForm = () => {
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <h1>TODO LIST</h1>
      <div className="form-container">
        <form>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label>내용</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
          <button onClick={addTodo}>추가</button>
        </form>
      </div>
      <div className="todoList-container">
        <div className="working-container">
          <h2>Working...</h2>
          {todos.map((item) => (
            <li key={item.id}>
              title:{item.title} - content:{item.content}
              <button onClick={deleteTodo}>제거</button>
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
