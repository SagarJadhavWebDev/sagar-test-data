import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "redux/rootReducers";
import { setSidebarOpen } from "redux/ui/ui.actions";

const MainTopBar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: ApplicationState) => state.ui.sidebarOpen);
  return (
    <div className="topbar">
      <div className="toggle-block">
        <div
          onClick={() => {
            isOpen
              ? dispatch(setSidebarOpen(false))
              : dispatch(setSidebarOpen(true));
          }}
          className="toggle"
        >
          <i className="bi bi-list"></i>
        </div>
        <h6>Projects</h6>
      </div>

      <div className="search">
        <a className="mr-2" href="javascript:void(0)">
          <i className="bi bi-search"></i>
        </a>
        <a
          href="javascript:void(0)"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="bi bi-plus-circle"></i>
        </a>
      </div>
    </div>
  );
};

export default MainTopBar;
