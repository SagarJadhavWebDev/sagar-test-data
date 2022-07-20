import {
  SET_CURRENT_PAGE,
  SET_MAX_PAGE,
  SET_PER_PAGE,
  SET_SIDEBAR_OPEN,
  SET_TOTAL_PAGE,
  SET_VIEW_TYPE,
} from "./ui.actions";
import { UIStateType } from "./ui.types";

const INITIAL_STATE: UIStateType = {
  currentPage: null,
  maxPages: null,
  totalPages: null,
  viewType: "table",
  sidebarOpen: false,
  perPage: 5,
};

function uiReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_PAGE:
      return {
        ...state,
        totalPages: action.payload,
      };
    case SET_MAX_PAGE:
      return {
        ...state,
        maxPages: action.payload,
      };
    case SET_VIEW_TYPE:
      return {
        ...state,
        viewType: action.payload,
      };
    case SET_SIDEBAR_OPEN:
      return {
        ...state,
        sidebarOpen: action.payload,
      };
    case SET_PER_PAGE:
      return {
        ...state,
        perPage: action.payload,
      };
    default:
      return state;
  }
}

export default uiReducer;
