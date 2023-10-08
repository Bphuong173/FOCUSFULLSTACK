import React, { useState } from "react";
import { AddNewTodoLabel } from "../../addnewtodo/addnewtodolabel";
import { Action } from "./action/action.js";
import "./item.css";

export const Item = ({ todoLabel, deleteTodoLabel, updateTodoLabel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const updateTaskLabel = (value, todoLabelid) => {
    updateTodoLabel(value, todoLabelid);
    setIsEditing(false);
  };
  return (
    <>
      <div className="TagItem">
        <p
          style={{
            backgroundColor: todoLabel.color,
            height: 10,
            width: 10,
            borderRadius: 10,
            margin: 0,
            marginRight: "5px",
            paddingRight: "3px",
          }}
        ></p>
        <div className="todoTagLabel">
          <li className="todoTagLabel-content">{todoLabel.task}</li>

          {isEditing ? (
            <AddNewTodoLabel
              updateTaskLabel={updateTaskLabel}
              todoLabel={todoLabel}
              key={todoLabel._id}
            />
          ) : (
            <>
              <Action
                setIsEditing={setIsEditing}
                deleteTodoLabel={deleteTodoLabel}
                todoLabel={todoLabel}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};
