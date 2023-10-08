import React, { useState } from "react";
import { Checkcolor } from "./colors/checkcolor.js";
import "./addmodal.css";
export const AddModal = ({ addTodoLabel, handleCloseModal }) => {
  const [value, setValue] = useState("");
  const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
  const [color, setColor] = useState("red");
  const buttons = colors.map((colorItem) => (
    <div
      type="color"
      key={colorItem}
      value={colorItem}
      className="colorBtn"
      style={{
        backgroundColor: colorItem,
      }}
      onClick={() => setColor(colorItem)}
    >
      {colorItem === color && <Checkcolor />}
    </div>
  ));
  const handleSubmit = () => {
    // Thêm todo vào danh sách
    addTodoLabel(value, color);
    // Đóng modal
    handleCloseModal();
  };

  return (
    <>
      <div className="modal-css">
        <div className="modal">
          <div className="modal-header">
            <h2 className="Add-Todo">Add Todo</h2>
          </div>
          <div className="modal-body">
            <input
              className="modal-input"
              type="text"
              placeholder="Thêm nhiệm vụ"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="colorBtn-outside">{buttons}</div>
          </div>

          <div className="modal-footer">
            <button className="cancelModal" onClick={handleCloseModal}>
              Cancel
            </button>
            <button className="saveModal" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
