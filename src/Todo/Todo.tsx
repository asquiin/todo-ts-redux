// import React from "react";
// import { tasks } from "../data/tasks";

// export const Todo = () => {
//     return (
//         <>
//             {tasks.map(task => (
//                 <table key={task.id} className="d-flex justify-content-center" style={{width: '100%'}}>
//                     <tr> 
//                     <td>{task.id}</td>
//                     <td>{task.description}</td>
//                     </tr>
//                 </table>
//             ))}
//         </>
//     );
// }

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { RootState } from "../state/reducers";

export const Todo = () => {
  const tasks = useSelector((state: RootState) => state.state.todo_state);
  const dispatch = useDispatch();
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const { addTask } = bindActionCreators(actionCreators, dispatch);

  const handleAddTask = () => {
    if (newTaskDescription.trim() !== "") {
      addTask({
        id: 0, // You can set this to the appropriate value
        description: newTaskDescription,
      });
      setNewTaskDescription("");
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <table className="d-flex justify-content-center" style={{ width: "100%" }}>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
