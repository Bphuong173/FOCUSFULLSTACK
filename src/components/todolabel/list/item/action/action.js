import React, { useEffect, useState, useRef } from "react";
import "./action.css";
export const Action = ({ setIsEditing, deleteTodoLabel, todoLabel }) => {
  const refContainer = useRef();
  const [showActions, setShowActions] = useState(false);

  const handleClick = (event) => {
    const target = event.target;
    const currentContainer = refContainer.current;

    if (currentContainer && !currentContainer.contains(target)) {
      setShowActions(false);
    }
  };

  useEffect(() => {
    if (showActions) {
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }
  }, [showActions]);

  return (
    <>
      <div className="div-action" ref={refContainer}>
        <p className="threedots" onClick={() => setShowActions(true)}>
          ...
        </p>
        {showActions && (
          <div className="headerModal">
            <button className="updateBtn" onClick={() => setIsEditing(true)}>
              Update
            </button>
            <button
              className="deleteBtn"
              onClick={() => deleteTodoLabel(todoLabel._id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
};
