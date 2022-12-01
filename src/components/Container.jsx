import React from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";
import { useState } from "react";
import clientHttp from "../services/ClientHttp";
import { useEffect } from "react";
const Container = () => {
  const [lista, setLista] = useState([]);
//   useEffect (() => {
//     clientHttp.get(`/?id_author=12`)
//     .then(res => setLista(res.data.data)).catch(err => console.log(err))
//   })
  const handleAddItem = (addItem) => {
    setLista([...lista, addItem]);
  };
  return (
    <div>
      <h1>TODO LIST</h1>
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList lista={lista} setLista={setLista} />
    </div>
  );
};

export default Container;
