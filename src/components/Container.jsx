import React from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";

const Container = () => {
  return <div>Container!
    <h1>TODO LIST</h1>
    <FormTodo/>
    <TaskList/>
  </div>;
};

export default Container;
