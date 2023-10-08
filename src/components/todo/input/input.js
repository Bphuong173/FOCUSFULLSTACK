import React, { useState, useEffect, useRef } from "react";
import "./input.css";
import { Menuicon } from "./headericon/menuicon";
import { Checkicon } from "./headericon/checkicon";
import { Plusicon } from "./headericon/plusicon";
import { Linebreak } from "./headericon/linebreak";
export const Input = ({ addTodo, todoLabels }) => {
  const refInput = useRef();
  const [value, setValue] = useState("");
  const [labelId, setLabelId] = useState(undefined);
  const [showActions, setShowActions] = useState(false);

  const menuBtn = todoLabels.map((todoLabel) => {
    return (
      <>
        <div onClick={() => setLabelId(todoLabel)} className="OutSide-menuBtn">
          <p
            value={todoLabel._id}
            style={{
              height: 10,
              width: 10,
              borderRadius: 10,
              margin: 0,
              paddingLeft: "5px",
              marginLeft: 5,
              backgroundColor: todoLabel.color,
            }}
          ></p>
          <div className="labelId" key={todoLabel._id} value={todoLabel._id}>
            {todoLabel.task}
          </div>
          {todoLabel === labelId && <Checkicon />}
        </div>
      </>
    );
  });

  const handleClick = (event) => {
    const target = event.target;
    const currentContainer = refInput.current;

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
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value, labelId);
    setValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="Div-Input" ref={refInput}>
          <Plusicon />
          <input
            className="Input"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="write todo here"
          />
          <p className="icon-menu" onClick={() => setShowActions(true)}>
            <Menuicon />
          </p>
          <Linebreak />
          {showActions && (
            <div value={labelId}>
              <div className="menuBtn">{menuBtn}</div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};
