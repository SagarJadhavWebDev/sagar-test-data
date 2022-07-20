import React, { useEffect, useState } from "react";
import useFetch from "use-http";
import Pagination from "./Pagination";
import TableData from "./TabelData";
import apiEndpoints from "constents/apiEndpoints";
import Loader from "./Loader";
import CardData from "./CardData";
import FaildToLoad from "./FaildToLoad";
import Sidebar from "./Sidebar";
import SidebarCharts from "./SidebarCharts";
import Main from "./Main";


interface DataTabelProps {}
const DataTabel: React.FC<DataTabelProps> = ({}) => {
  

  return (
    <>
      <Sidebar />
      <SidebarCharts />
      <Main/>
    </>
  );
};

export default DataTabel;
