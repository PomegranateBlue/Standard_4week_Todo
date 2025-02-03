{
  /*투두 카드를 구현하자, 1개의 카드를 구현
  해당 투두 가드가 위치하는 리스트를 구분하기 위해 type으로 구분
  - type은 최초 입력 시 'working'으로 고정
  - 완료 버튼 이벤트를 통해 'done','working'타입 전환 가능하게 할 것
  - type 검사를 통해 카드생성
  */
}

const TodoItem = ({ todos }) => {


  return (
    <div className="todoCard">
      {todos.map((item) =>
        item.type === "working" ? (
          <div className="workingCard">
            <li>
              제목 : {item.title} - 내용 : {item.content}
              <button onClick={completeTodo}>완료</button>
              <button onClick={deleteTodo}>삭제</button>
            </li>
          </div>
        ) : (
          <div className="doneCard">
            <li>
              제목 : {item.title} - 내용 : {item.content}
              <button onClick={cancelTodo}>취소</button>
              <button onClick={deleteTodo}>삭제</button>
            </li>
          </div>
        )
      )}
    </div>
  );
};
export default TodoItem;
