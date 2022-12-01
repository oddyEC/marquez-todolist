import React from "react";
import Checkbox from "./Checkbox";

const TaskList = (props) => {
  const { lista, setLista } = props;
  const onChangeStatus = (e) => {
    const { nombre, checked } = e.target;
    const updateList = lista.map((item) => ({
      ...item,
      done: item.id === nombre ? checked : item.done,
    }));
    setLista(updateList);
  };
  const checklist = lista.map((item) => (
    <Checkbox key={item.id} data={item} onChangeStatus={onChangeStatus} />
  ));
  return (
    <div className="todo-list">
      {lista.lenght ? checklist : "Lista vacía"}
      {lista.lenght ? (
        <p>
          `${} de ${} completada(s)`
        </p>
      ) : null}
      <Checkbox />
    </div>
  );
};

export default TaskList;
