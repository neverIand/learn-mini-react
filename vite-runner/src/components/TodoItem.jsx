import React from "../../core/React";
import "../TodoList.css";

function TodoItem({ todo ,removeTodo,cancelTodo,doneTodo}) {
  return (
    <li>
      <span className={todo.status}>{todo.title}</span>
      <button onClick={() => removeTodo(todo.id)}>remove</button>
      {todo.status === "done" ? (
        <button onClick={() => cancelTodo(todo.id)}>cancel</button>
      ) : (
        <button onClick={() => doneTodo(todo.id)}>done</button>
      )}
    </li>
  );
}

export default TodoItem;
