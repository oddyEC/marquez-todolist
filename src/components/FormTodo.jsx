import React from "react";
import { useState } from "react";

const FormTodo = props => {
  const [descripcion, setDescripcion] = useState("");
  const { handleAddItem } = props;
  const handleSubmit = e => {
    e.preventDefault(); //Evitar que se refresque la pagina
    handleAddItem({
        done: false,
        id: (+new Date()).toString(),
        descripcion
    })
    console.log(descripcion);
    setDescripcion("")
  }
  
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder = "Titulo"
          />
          <button
            className="button-blue"
            disabled={descripcion ? "" : "disabled"}
          >
            Agregar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
