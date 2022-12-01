import React from "react";

const Checkbox = (props) => {
  const {
    onChange,
    data: { id, descripcion, done },
  } = props;
  return (
    <>
      <label className="todo new-item">
        <input
          className="todo_state"
          name={id}
          type="Checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className={done ? "todo strike" : "todo"}>{descripcion}</div>
      </label>
    </>
  );
};

export default Checkbox;
