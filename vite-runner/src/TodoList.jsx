import React from "../core/React";
import "./TodoList.css";
import TodoItem from "./components/TodoItem";
function TodoList() {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState([
    {
      id: crypto.randomUUID(),
      title: "Eat",
      status: "active",
    },
    {
      id: crypto.randomUUID(),
      title: "Sleep",
      status: "done",
    },
    {
      id: crypto.randomUUID(),
      title: "Code",
      status: "done",
    },
  ]);

  function handleAdd() {
    addTodo(inputValue);
    setInputValue("");
  }

  function addTodo(title) {
    setTodos((todos) => [...todos, { title }]);
  }

  function removeTodo(id) {
    const newTodos = todos.filter((todo) => {
      return id !== todo.id;
    });
    setTodos(newTodos);
  }

  function doneTodo(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: "done" };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function cancelTodo(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: "active" };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>TODOS</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>add</button>
      </div>

      <div>
        <ul>
          {...todos.map((todo) => {
            return (
              // <li>
              //   <span className={todo.status}>{todo.title}</span>
              //   <button onClick={() => removeTodo(todo.id)}>remove</button>
              //   {todo.status === "done" ? (
              //     <button onClick={() => cancelTodo(todo.id)}>cancel</button>
              //   ) : (
              //     <button onClick={() => doneTodo(todo.id)}>done</button>
              //   )}
              // </li>
              <TodoItem
                todo={todo}
                removeTodo={removeTodo}
                cancelTodo={cancelTodo}
                doneTodo={doneTodo}
              ></TodoItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
