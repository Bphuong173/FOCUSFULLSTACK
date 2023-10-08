import React, { useState } from "react";
import "./addnewtodolabel.css";
import { HeaderModal } from "../headermodal/headermodal.js";
export const AddNewTodoLabel = ({ updateTaskLabel, todoLabel }) => {
  const [showModal] = useState(true);

  return (
    <div className="updateModal">
      <div className="updateInput">
        {showModal && (
          <HeaderModal
            updateTaskLabel={updateTaskLabel}
            todoLabel={todoLabel}
          />
        )}
      </div>
    </div>
  );
};
