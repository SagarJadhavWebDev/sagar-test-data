import React from "react";
import times from "lodash/times";
interface PaginationProps {
  currentPage: number;
  ChangePage: Function;
  totalPages: number;
  maxPages: number;
}
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  ChangePage,
  totalPages,
  maxPages,
}) => {
  let startPage: number, endPage: number;
  if (totalPages <= maxPages) {
    // total pages less than max so show all pages
    startPage = 1;
    endPage = totalPages;
  } else {
    // total pages more than max so calculate start and end pages
    let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // current page near the end
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      // current page somewhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  // calculate start and end item indexes
  let startIndex = (currentPage - 1) * 10;

  // create an array of pages to ng-repeat in the pager control
  let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );

  return (
    <>
      <div className="mb-5 flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            <li className="page-item disabled">
              <a
                onClick={() => {
                  currentPage !== 1 && ChangePage(currentPage - 1);
                }}
                aria-disabled="true"
                className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 cursor-pointer focus:shadow-none"
              >
                Previous
              </a>
            </li>
            {pages?.map((i, key) => {
              return (
                <li
                  onClick={() => {
                    ChangePage(i);
                  }}
                  key={key}
                  className="page-item"
                >
                  <a
                    className={
                      currentPage === i
                        ? "page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                        : "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    }
                    href="#"
                  >
                    {i}
                  </a>
                </li>
              );
            })}
            <li className="page-item">
              <a
                onClick={() => {
                  ChangePage(currentPage + 1);
                }}
                className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
