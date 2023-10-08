import React from "react";
import { v4 as uuidv4 } from "uuid";
import { OpenAddModal } from "../add-modal/openaddmodal";
import { Item } from "./item/item";
export const TodoLabel = ({
  todoLabels,
  reloadAll,
  setOpenModal,
  handleOpenModal,
  handleCloseModal,
}) => {
  const addTodoLabel = (task, color) => {
    const newTodoLabel = {
      task: task,
      color: color,
      isEditing: false,
    };
    fetch("http://localhost:5500/todoLabel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoLabel),
    })
      .then(() => {
        reloadAll();
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const deleteTodoLabel = (_id) => {
    fetch("http://localhost:5500/todoLabel/" + _id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        reloadAll();
      });
  };

  const updateTaskLabel = (task, _id, color) => {
    fetch("http://localhost:5500/todoLabel/" + _id, {
      method: "PUT",
      body: JSON.stringify({
        _id: uuidv4(),
        task: task,
        color: color,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      reloadAll();
    });
  };
  return (
    <>
      <div>
        <OpenAddModal
          addTodoLabel={addTodoLabel}
          setOpenModal={setOpenModal}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
        {todoLabels.map((todoLabel) => (
          <Item
            key={todoLabel._id}
            todoLabel={todoLabel}
            deleteTodoLabel={deleteTodoLabel}
            updateTodoLabel={updateTaskLabel}
          />
        ))}
      </div>
    </>
  );
};
