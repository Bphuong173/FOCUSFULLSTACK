import React, { useState } from "react";
import { Updateinput } from "../updateinput/updateinput";
export const Item = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const updateTasktodo = (value, todoid) => {
    updateTodo(value, todoid);
    setIsEditing(false);
  };
  return (
    <>
      <li>{todo.task}</li>
      <li>label:{todo.label?.task}</li>
      {isEditing ? (
        <Updateinput
          updateTasktodo={updateTasktodo}
          todo={todo}
          key={todo._id}
        />
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Update</button>
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </>
      )}
    </>
  );
};
