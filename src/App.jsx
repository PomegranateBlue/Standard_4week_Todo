import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div>
      <h1>TODO LIST</h1>
      <div className="inputForm">
        <label>제목</label>
        <input></input>
        <label>내용</label>
        <input></input>
        <button>추가</button>
        <div className="working-carousel"></div>
        <div className="done-carousel"></div>
      </div>
    </div>
  );
}

export default App;
