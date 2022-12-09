import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialList = [
  {
    id: "a",
    name: "Robin"
  },
  {
    id: "b",
    name: "Dennis"
  }
];

const AppAddItem = () => {
  const [list, setList] = useState(initialList);
  const [name, setname] = useState("");

  const handleChange = (event) => {
    setname(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // const newList = list.concat({ name, id: uuidv4() });
      // setList(newList);
      // setname("");
      handleAdd();
    }
  };

  const handleAdd = () => {
    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);
    setname("");
  };

  return (
    <div>
      <AddItem
        name={name}
        onChange={handleChange}
        onAdd={handleAdd}
        handleKeyDown={handleKeyDown}
      />
      <List list={list} />
    </div>
  );
};

const AddItem = ({ onChange, name, onAdd, handleKeyDown }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={onAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

const List = ({ list }) => {
  return (
    <form>
      {list.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </form>
  );
};

export default AppAddItem;
