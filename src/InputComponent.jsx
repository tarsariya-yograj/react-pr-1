import React, { useState } from "react";
import Name from "./Name";

const InputComponent = () => {
  let [name, setname] = useState("");
  let [nameList, setNameList] = useState([]);
  let [errorMessage, setErrorMessage] = useState("");

  const handelname = (e) => {
    setname(e.target.value);
    setErrorMessage(""); 
  };

  const handleclick = () => {
    if (name.trim() === "") {
      setErrorMessage("Please enter a task name");
      return;
    }

    let user = {
      name: name
    };
    setNameList([...nameList, user]);
    setname("");
  };

  const handleDelete = (index) => {
    const updatedList = [...nameList];
    updatedList.splice(index, 1);
    setNameList(updatedList);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="enter your name"
          value={name}
          onChange={handelname}
          className="input"
        />
        <button onClick={handleclick} className="button">
          Add
        </button>
        
        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}

        {nameList.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          <ul className="todo-list">
            {nameList.map((ele, index) => (
              <li key={index}>
                {ele.name}
                <button
                  className="delete-button"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default InputComponent;
