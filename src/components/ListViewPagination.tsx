import React, { useEffect, useState } from "react";
import { ApplicationState } from "redux/rootReducers";
import getPages from "utils/getPages";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "redux/ui/ui.actions";

interface ListViewPaginationProps {}

const ListViewPagination: React.FC<ListViewPaginationProps> = ({}) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: ApplicationState) => state.ui.currentPage
  );
  const [pages, setPages] = useState(undefined);
  const maxPages = useSelector((state: ApplicationState) => state.ui.maxPages);
  const totalPages = useSelector(
    (state: ApplicationState) => state.ui.totalPages
  );
  useEffect(() => {
    setPages(getPages(totalPages, maxPages, currentPage));
  }, [currentPage, maxPages, totalPages]);
  return (
    <>
      <div className="listview-pagination  d-sm-flex">
        <div className="prev-block">
          <button
            onClick={() => {
              currentPage !== 1 && dispatch(setCurrentPage(currentPage - 1));
            }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <span>Prev</span>
        </div>
        <ul>
          {pages &&
            pages?.map((p, key) => {
              return (
                <li key={key}>
                  <a
                    onClick={() => {
                      dispatch(setCurrentPage(p));
                    }}
                    className={Number(currentPage) === p ? "active" : ""}
                  >
                    {p}
                  </a>
                </li>
              );
            })}
        </ul>
        <div className="next-block">
          <span>Next</span>
          <button
            onClick={() => {
              dispatch(setCurrentPage(currentPage + 1));
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="listview-pagination d-flex d-sm-none flex-column"></div>
    </>
  );
};

export default ListViewPagination;
