import React, { useState, useEffect } from "react";
import { Todo } from "./components/todo/todo/todo";
import { TodoLabel } from "./components/todolabel/list/todolabel";
export default function App() {
  const [todoLabels, setTodoLabels] = useState([]);
  const [todos, setTodos] = useState([]);

  const loadTodo = () => {
    fetch("http://localhost:5500/todo")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      })
      .catch((error) => console.log(error));
  };
  const loadTodolabel = () => {
    fetch("http://localhost:5500/todoLabel")
      .then((response) => response.json())
      .then((json) => {
        setTodoLabels(json);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    loadTodolabel();
  }, []);
  useEffect(() => {
    loadTodo();
  }, []);
  const reloadAll = () => {
    loadTodo();
    loadTodolabel();
  };
  return (
    <>
      <div className="AllTodo">
        <div className="todoLabel">
          <TodoLabel todoLabels={todoLabels} reloadAll={reloadAll} />
        </div>
        <div className="TodoList">
          <Todo todoLabels={todoLabels} todos={todos} loadTodo={loadTodo} />
        </div>
      </div>
    </>
  );
}
