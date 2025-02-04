import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "test Title",
      content: "test Content",
    },
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    {
      id: 2,
      title: "test completeTitle",
      content: "test completeContent",
    },
  ]);

  // console.log(todos);

  const deleteTodo = (id) => {
    //삭제 버튼을 누른 항목의 id 조회
    //해당 id를 제외한 todos 목록 업데이트
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        completeTodos={completeTodos}
        setTodos={setTodos}
        setCompleteTodos={setCompleteTodos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
