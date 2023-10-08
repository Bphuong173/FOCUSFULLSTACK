import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "../input/input";
import { Item } from "../item/item";
export const Todo = ({ todoLabels, todos, loadTodo }) => {
  const addTodo = (task, labelId, color) => {
    const newTodo = {
      task: task,
      labelId: labelId,
      color: color,
      isEditing: false,
    };
    fetch("http://localhost:5500/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => {
        loadTodo();
      })

      .catch((err) => {
        alert(err.message);
      });
  };
  const deleteTodo = (_id) => {
    fetch("http://localhost:5500/todo/" + _id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        loadTodo();
      });
  };

  const updateTask = (task, _id) => {
    fetch("http://localhost:5500/todo/" + _id, {
      method: "PUT",
      body: JSON.stringify({
        _id: uuidv4(),
        task: task,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    });
    loadTodo();
  };

  return (
    <>
      <Input addTodo={addTodo} todoLabels={todoLabels} />
      {todos.map((todo) => (
        <Item
          key={todo._id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTask}
        />
      ))}
    </>
  );
};
