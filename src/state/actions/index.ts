import { ActionType } from "../action-types";

interface AddTask {
    type: ActionType.ADD_TASK;
    payload: {
        id: number;
        description: string;
    };
}

interface DeleteTask {
    type: ActionType.DELETE_TASK;
    payload:{
        id:number;
    }
}

export type Action = AddTask | DeleteTask;