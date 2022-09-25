import React, { useState } from "react";
import "./Todo.css";

const Todos = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  return (
    <>
      {/* =========================back ground==================== */}
      <div className="main-div">
        {/* =======================main div========================= */}
        <div className="child-div">
          <div className="hrading">
            <h1>Add Your List Here ✌️</h1>
          </div>
          <div className="addItem">
            <input
              type="text"
              placeholder="✍️ Add Item....."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa-solid fa-plus"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>
          <div className="showItem">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem">
                  <h3>{elem}</h3>
                  <i className="fa-solid fa-pen-to-square"></i>
                  <i className="fa-solid fa-trash"></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
