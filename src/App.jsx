import "./App.css";
const App = () => {
  return (
    <div>
      <h1>TODO LIST</h1>
      <div className="form-container">
        <form>
          <label>제목</label>
          <input></input>
          <label>내용</label>
          <input></input>
          <button>추가</button>
        </form>
      </div>
      <div className="todoList-container">
        <div className="working-container"></div>
        <div className="done-container"></div>
      </div>
    </div>
  );
};

export default App;
