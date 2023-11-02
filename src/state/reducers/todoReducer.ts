import { ActionType } from "../action-types";
import { Action } from "../actions";

interface NewTask {
  id: number;
  description: string;
}

interface TodoState {
  todo_state: NewTask[];
}

const initialState: TodoState = {
  todo_state: [],
};

let nextId = 1;

const todoReducer = (
  state: TodoState = initialState,
  action: Action
): TodoState => {
  switch (action.type) {
    case ActionType.ADD_TASK:
      const newTask = {
        id: nextId++,
        description: action.payload.description,
      };

      return {
        ...state,
        todo_state: [...state.todo_state, newTask],
      };
    case ActionType.DELETE_TASK:
      const taskIdToDelete = action.payload.id;
      const updatedTasks = state.todo_state.filter(
        (task) => task.id !== taskIdToDelete
      );
      return {
        ...state,
        todo_state: updatedTasks,
      };
    default:
      return state;
  }
};

export default todoReducer;
