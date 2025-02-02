import { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const resetForm = () => {
    setTitle("");
    setContent("");
  };
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
  return (
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
  );
};

export default TodoForm;
