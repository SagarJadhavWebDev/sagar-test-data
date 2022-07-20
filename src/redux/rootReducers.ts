import { combineReducers } from "redux";
import uiReducer from "./ui/ui.reducer";
import { UIStateType } from "./ui/ui.types";

export interface ApplicationState {
  ui: UIStateType;
}

export default combineReducers({
  ui: uiReducer,
});
