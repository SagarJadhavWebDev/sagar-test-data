import { viewTypes } from "components/ProjectFilters";

export interface UIStateType {
  currentPage: number;
  totalPages: number;
  maxPages: number;
  viewType: viewTypes;
  sidebarOpen:boolean;
  perPage:number
}
