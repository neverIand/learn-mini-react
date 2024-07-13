import React from "../core/React";
import "./TodoList.css";
import TodoItem from "./components/TodoItem";
function TodoList() {
  const [inputValue, setInputValue] = React.useState("");
  const [filter, setFilter] = React.useState("all");
  const [displayTodos, setDisplayTodos] = React.useState([]);
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
      status: "active",
    },
  ]);

  console.log("todos state", todos);

  React.useEffect(() => {
    const cachedTodos = localStorage.getItem("todos");
    if (cachedTodos) {
      console.log("cachedTodos", cachedTodos);
      setTodos(JSON.parse(cachedTodos));
    }
  }, []);

  React.useEffect(() => {
    if (filter === "all") {
      setDisplayTodos(todos);
    } else if (filter === "active") {
      const newTodos = todos.filter((todo) => {
        return todo.status === "active";
      });
      setDisplayTodos(newTodos);
    } else if (filter === "done") {
      const newTodos = todos.filter((todo) => {
        return todo.status === "done";
      });
      setDisplayTodos(newTodos);
    }
  }, [filter, todos]);

  function handleAdd() {
    addTodo(inputValue);
    setInputValue("");
  }

  function createTodo(title) {
    return { title, status: "active", id: crypto.randomUUID() };
  }

  function addTodo(title) {
    setTodos((todos) => [...todos, createTodo(title)]);
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

  function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
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
        <button onClick={saveTodo}>save</button>
      </div>

      <div>
        <input
          type="radio"
          name="filter"
          id="all"
          checked={filter === "all"}
          onChange={() => setFilter("all")}
        />
        <label htmlFor="all">all</label>

        <input
          type="radio"
          name="filter"
          id="active"
          checked={filter === "active"}
          onChange={() => setFilter("active")}
        />
        <label htmlFor="active">active</label>

        <input
          type="radio"
          name="filter"
          id="done"
          checked={filter === "done"}
          onChange={() => setFilter("done")}
        />
        <label htmlFor="done">done</label>
      </div>

      <ul>
        {...displayTodos.map((todo) => {
          return (
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
  );
}

export default TodoList;
