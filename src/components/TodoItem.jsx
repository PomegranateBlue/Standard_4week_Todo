{
  /*투두 카드를 구현하자, 1개의 카드를 구현
  해당 투두 가드가 위치하는 리스트를 구분하기 위해 type으로 구분분
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      type: "working",
      title: "test Title",
      content: "test Content",
    },
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    {
      id: 2,
      type: "done",
      title: "test completeTitle",
      content: "test completeContent",
    },
  ]);

  위와 같은 데이터 타입다루기

  - type은 최초 입력 시 'working'으로 고정
  - 완료 버튼 이벤트를 통해 'done','working'타입 전환 가능하게 할 것

  */
}
import { useState } from "react";
const TodoItem = ({ todos, completeTodos }) => {
  return (
    <div className="todoCard">
      {todos.map((item) => {
        if (item.type === "working") {
          <li className="workingTodo" key={item.id}>
            제목:{item.title} - 내용:{item.content}
            <button>완료</button>
            <button>삭제</button>
          </li>;
        } else if (item.type === "done") {
          <li className="doneTodo" key={item.id}>
            제목:{item.title} - 내용:{item.content}
            <button>취소</button>
            <button>삭제</button>
          </li>;
        }
      })}
    </div>
  );
};
export default TodoItem;
