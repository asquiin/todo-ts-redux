import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { RootState } from "../state/reducers";
import { Button } from "react-bootstrap";

export const Todo = () => {
    const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.state.todo_state);
  const { deleteTask } = bindActionCreators(actionCreators, dispatch);
  const handleDeleteTask = (taskId:number) => {
    deleteTask(taskId);
  };
  return (
    <>
      <table className="d-flex justify-content-center" style={{ width: "100%" }}>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.description}</td>
              <td> <Button onClick={() => handleDeleteTask(task.id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
