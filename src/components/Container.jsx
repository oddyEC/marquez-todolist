import React from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";
import { useState } from "react";
const Container = () => {
  const [lista, setLista] = useState([]);
  const handleAddItem = addItem => {
    setLista([...lista, addItem])
  }
  return (
    <div>
      <h1>TODO LIST</h1>
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList lista={lista} setLista={setLista} />
    </div>
  );
};

export default Container;
