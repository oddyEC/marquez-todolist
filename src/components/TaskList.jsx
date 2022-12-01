import React from "react";
import Checkbox from "./Checkbox";

const TaskList = (props) => {
  const { lista, setLista } = props;
  
  const checklist = lista.map((item) => <Checkbox key={item.id} data={item} />);
  return (
    <div className="todo-list">
      {lista.lenght ? checklist : "Lista vacía"}
      {lista.lenght ? <p>`${} de ${} completada(s)`</p> : null}
      <Checkbox />
    </div>
  );
};

export default TaskList;
