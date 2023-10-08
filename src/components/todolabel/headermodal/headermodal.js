import React, { useState } from "react";
import "./headermodal.css";
export const HeaderModal = ({ updateTaskLabel, todoLabel }) => {
  const [value, setValue] = useState(todoLabel.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    updateTaskLabel(value, todoLabel._id);
  };
  return (
    <div className="headerModal-header">
      <form onSubmit={handleSubmit}>
        <h2 className="headerModal-edit">Edit ToDo</h2>
        <input
          className="headerModal-body"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Update task Label"
        />
        <div className="headerModal-footer">
          <button className="headerModal-CancelBtn">Cancel</button>
          <button className="headerModal-SavelBtn" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
