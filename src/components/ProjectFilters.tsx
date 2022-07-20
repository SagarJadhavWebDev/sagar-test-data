import apiEndpoints from "constents/apiEndpoints";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "redux/rootReducers";
import { setCurrentPage, setMaxPage, setTotalPage } from "redux/ui/ui.actions";
import useFetch, { CachePolicies } from "use-http";
import CardData from "./CardData";
import FaildToLoad from "./FaildToLoad";
import Loader from "./Loader";
import TableFormat from "./TableFormat";
import isEmpty from "lodash/isEmpty";

export type viewTypes = "table" | "card";
type DataType = {
  data: any;
  totalPages: number;
};
interface ProjectfiltersProps {}

const Projectfilters: React.FC<ProjectfiltersProps> = ({}) => {
  const page = useSelector((state: ApplicationState) => state.ui.currentPage);
  const dispatch = useDispatch();
  const perPage = useSelector((state: ApplicationState) => state.ui.perPage);
  const viewType = useSelector((state: ApplicationState) => state.ui.viewType);
  const { data, loading, response } = useFetch(
    apiEndpoints.sampleData(page, perPage),
    { cachePolicy: CachePolicies.NO_CACHE },
    page && [page, perPage]
  );

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, []);

  useEffect(() => {
    dispatch(setMaxPage(5));
    dispatch(setTotalPage(data?.totalPages));
  }, [data?.totalPages]);
  return (
    <>
      <div className="table-responsive list-table">
        {viewType === "table" && !loading ? (
          <TableFormat data={data} />
        ) : !loading ? (
          <CardData data={data} />
        ) : (
          loading && <Loader />
        )}
      </div>
    </>
  );
};

export default Projectfilters;
