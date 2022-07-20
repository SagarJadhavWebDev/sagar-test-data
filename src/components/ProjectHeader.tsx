import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage, setViewtype } from "redux/ui/ui.actions";

interface ProjectHeaderProps {}
const ProjectHeader: React.FC<ProjectHeaderProps> = ({}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="project-header">
        <div className="button-block d-none d-sm-block">
          <button
            onClick={() => {
              dispatch(setViewtype("table"));
            }}
            className="mr-3 icon-btn"
          >
            <i className="bi  bi-list"></i> List
          </button>
          <button
            onClick={() => {
              dispatch(setViewtype("grid"));
            }}
            className="icon-btn"
          >
            <i className="bi bi-grid"></i> Grid
          </button>
        </div>
        <div className="button-block d-flex d-sm-none">
          <button className="btn list-btn">
            <ion-icon name="list-outline" class="me-0"></ion-icon>
          </button>
          <button className="btn list-btn ms-2">
            <ion-icon name="grid-outline" class="me-0"></ion-icon>
          </button>
        </div>
        <div className="filter-drop">
          <label>
            <ion-icon name="funnel-outline"></ion-icon> Sort:
          </label>
          <form>
            <select>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};
export default ProjectHeader;
