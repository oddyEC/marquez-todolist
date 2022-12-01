import React from "react";
import { useState } from "react";

const FormTodo = () => {
  const [descripcion, setDescripcion] = useState("");
  return (
    <form>
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
