import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "redux/rootReducers";
import MainTopBar from "./MainTopBar";
import Projectfilters from "./ProjectFilters";
import ProjectHeader from "./ProjectHeader";

interface MainProps {}
const Main: React.FC<MainProps> = ({}) => {
  const isOpen = useSelector((state: ApplicationState) => state.ui.sidebarOpen);

  return (
    <>
      <div className={isOpen ? "main active" : "main"}>
        <MainTopBar />

        <div className="w-full project-wrapper">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-12">
                <ProjectHeader />
                <Projectfilters />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
