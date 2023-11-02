
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";

export const addTask = (task:{
    id: number,
    description: string;
}) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type:ActionType.ADD_TASK,
            payload:task,
        });
    };
};

export const deleteTask = (taskId: number) => {
    return (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.DELETE_TASK,
        payload: {
          id: taskId,
        },
      });
    };
  };
  
