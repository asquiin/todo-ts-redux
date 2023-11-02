import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { Button } from "react-bootstrap";
export const AddTodo = () => {
    const dispatch = useDispatch();
    const [newTaskDescription, setNewTaskDescription] = useState("");
  
    const { addTask } = bindActionCreators(actionCreators, dispatch);
  
    const handleAddTask = () => {
      if (newTaskDescription.trim() !== "") {
        addTask({
          id: 0, 
          description: newTaskDescription,
        });
        setNewTaskDescription("");
      }
    };
  
  return (
    <>
          <div className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <Button onClick={handleAddTask}>Add Task</Button>
      </div>
    </>
  );
};
