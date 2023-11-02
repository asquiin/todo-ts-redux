import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const reducers = combineReducers({
    state:todoReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>