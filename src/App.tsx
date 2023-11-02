import React from "react";
import { Todo } from "./Todo/Todo";
import { AddTodo } from "./Todo/AddTodo";
function App() {
  return (
    <div className="App">
      <AddTodo/>
      <Todo />
    </div>
  );
}

export default App;
