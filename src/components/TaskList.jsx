import React from "react";
import Checkbox from "./Checkbox";

const TaskList = props => {

  const { lista, setLista } = props;

  const onChangeStatus = e => {
    const { name, checked } = e.target;


    const updateList = lista.map(item => ({

      ...item,
       done: item.id === name ? checked : item.done
    }));
    setLista(updateList);
  };

  const chk = lista.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todo-list">
      {lista.length ? chk : "No tasks"}
      {lista.length ? (
        <p className="completed-task">
            2 de {lista.length} tarea(s) completada(s)
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
