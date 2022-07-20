import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "redux/rootReducers";
import { setCurrentPage, setPerPage } from "redux/ui/ui.actions";
import getPages from "utils/getPages";
import { AirlineDataType, DataType } from "./TabelData";

interface CardDataProps {
  data: DataType;
}
const CardData: React.FC<CardDataProps> = ({ data }) => {
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
      <div className="mt-3 grid-view-header">
        <div className="project-sort">
          <h6>Projects</h6>
          <a href="javascript:void(0)">
            <span>
              <i className="bi bi-sort-alpha-down"></i>
            </span>
          </a>
        </div>
        <div className="task-sort">
          <h6>Tasks</h6>
          <a href="javascript:void(0)">
            <span>
              <i className="bi bi-sort-numeric-down"></i>
            </span>
          </a>
        </div>
        <div className="due-sort">
          <h6>Due Date</h6>
          <a href="javascript:void(0)">
            <span>
              <i className="bi bi-sort-numeric-down"></i>
            </span>
          </a>
        </div>
        <div className="members-sort">
          <h6>Members</h6>
          <a href="javascript:void(0)">
            <span>
              <i className="bi bi-sort-numeric-down"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="grid-view ">
        {data?.data?.map((i, key) => {
          const airlineData: AirlineDataType = i?.airline?.[0];
          return (
            <div key={key} className="grid-block">
              <div className="title-block">
                <span>
                  <img src={airlineData?.logo} />
                </span>
                <h5>{airlineData?.name}</h5>
              </div>

              <div className="due-block">
                <span>{airlineData?.slogan}</span>
              </div>

              <div className="bottom-block">
                <div className="task">
                  <span>
                    <strong>20</strong>/45
                  </span>
                  <p>tasks</p>
                </div>

                <div className="budget">
                  <span>$3.2k</span>
                  <p>budget</p>
                </div>
              </div>

              <div className="drop-down">
                <a href="javascript:void(0)">
                  <span>
                  <i className="bi bi-three-dots"></i>
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="gridview-pagination">
        <div className="items-page">
          <form>
            <select
              onChange={(e) => {
                console.log("sagar", e.target.value);
                dispatch(setPerPage(Number(e.target.value)));
              }}
              id="grid-select"
            >
              <option value="5">5</option>
              <option value="15">15</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>
            <label>Items Per Page</label>
          </form>
        </div>
        <div className="grid-pagination-wrapper">
          <div className="prev-block">
            <button
              onClick={() => {
                currentPage !== 1 && dispatch(setCurrentPage(currentPage - 1));
              }}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
          </div>
          <ul className="grid-view-ul">
            {pages?.map((p, key) => {
              return (
                <li
                  onClick={() => {
                    dispatch(setCurrentPage(p));
                  }}
                  className={
                    Number(currentPage) === p
                      ? "rounded-lg bg-indigo-500 text-white"
                      : ""
                  }
                  key={key}
                >
                  <a href="javascript:void(0)">{p}</a>
                </li>
              );
            })}
          </ul>
          <div className="next-block">
            <button
              onClick={() => {
                dispatch(setCurrentPage(currentPage + 1));
              }}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardData;
