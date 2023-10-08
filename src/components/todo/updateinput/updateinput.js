import React, { useState } from "react";

export const Updateinput = ({ updateTasktodo, todo }) => {
  const [value, setValue] = useState(todo.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    updateTasktodo(value, todo._id);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Update task"
      />
      <button type="submit">Save Todo</button>
    </form>
  );
};
