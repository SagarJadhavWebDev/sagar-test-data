import React from "react";
import ListViewPagination from "./ListViewPagination";
import { DataType } from "./TabelData";

interface TableFormatProps {
  data: DataType;
}

const TableFormat: React.FC<TableFormatProps> = ({ data }) => {
  return (
    <>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>
              <div className="project-sort">
                <h6>Projects</h6>
                <a href="javascript:void(0)">
                  <span>
                    <i className="bi bi-sort-alpha-down"></i>
                  </span>
                </a>
              </div>
            </th>

            <th>
              <div className="members-sort">
                <h6>Members</h6>
                <a href="javascript:void(0)">
                  <span>
                    <i className="bi bi-sort-numeric-down"></i>
                  </span>
                </a>
              </div>
            </th>

            <th>
              <div className="task-sort">
                <h6>Tasks</h6>
                <a href="javascript:void(0)">
                  <span>
                    <i className="bi bi-sort-numeric-down"></i>
                  </span>
                </a>
              </div>
            </th>

            <th>
              <div className="due-sort">
                <h6>Due Date</h6>
                <a href="javascript:void(0)">
                  <span>
                    <i className="bi bi-sort-numeric-down"></i>
                  </span>
                </a>
              </div>
            </th>

            <th></th>
          </tr>
        </thead>
        {data?.data?.map((i, key) => {
          const project = i?.airline?.[0];
          return (
            <>
              <tbody>
                <tr>
                  <td scope="row">
                    <div className="list-icon-flex">
                      <div className="d-flex">
                        <div className="flex-shrink-0 list-flex-icon">
                          <a href="javascript:void(0)">
                            <span>
                              {/* //@ts-ignore */}
                              <img
                                style={{ objectFit: "cover" }}
                                src={project?.logo}
                              />
                            </span>
                          </a>
                        </div>
                        <div className="flex-grow-1 ms-3 list-flex-text">
                          <h5 className="inactive-title">{project?.name}</h5>
                          <p>{project?.established}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="members-list">
                      <ul>
                        <li>
                          <a href="javascript:void(0)">
                            <img src="img/person-1.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <img src="img/person-2.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <img src="img/person-3.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            {" "}
                            <span>{project?.id}</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div className="task-count">
                      <span>
                        {" "}
                        <strong>{project?.slogan}</strong>/148
                      </span>
                      <p>tasks</p>
                    </div>
                  </td>
                  <td>
                    <div className="date-badges">
                      <span className="badge-sm badge-primary">
                        <a href={`https://${project?.website}`} target="_blank">
                          {project?.website}
                        </a>
                      </span>
                      <span className="badge-sm badge-muted">24 feb 2019</span>
                    </div>
                  </td>
                  <td>
                    <div
                      className="form-check form-switch form-switch-md"
                      dir="ltr"
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="SwitchCheckSizemd"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      <ListViewPagination />
    </>
  );
};

export default TableFormat;
