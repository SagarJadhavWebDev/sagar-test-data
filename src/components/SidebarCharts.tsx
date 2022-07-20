import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "redux/rootReducers";

interface SidebarChartsProps {}
const SidebarCharts: React.FC<SidebarChartsProps> = ({}) => {
  const isOpen = useSelector((state: ApplicationState) => state.ui.sidebarOpen);
  return (
    <>
      <div
        className={isOpen ? "project-page-chart active" : "project-page-chart "}
      >
        <div className="chart-title">
          <div className="chart-title-text">
            <img src="img/logo-11.png" alt="logo" />
            <div>
              <h5>whiteui.store llc</h5>
              <p>8484 ross wells</p>
            </div>
          </div>
          <div className="chart-dropdown">
            <div className="dropdown">
              <button className="dropdown-btn" type="button">
                <i className="bi bi-chevron-down"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="progress-wrapper">
          <h5>Overview</h5>

          <div className="progress-block">
            <div className="progress-text">
              <div>
                <h6>Sales</h6>
                <p>Week Comparison</p>
              </div>
              <div className="progress-value">
                <span>
                  1.345
                  <ion-icon
                    name="arrow-up-outline"
                    class="green-up-arrow"
                  ></ion-icon>
                </span>
              </div>
            </div>
            <div className="progress animated-progess">
              <div
                className="progress-bar progress-sm progress-primary"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuemin={75}
                aria-valuemax={0}
                aria-valuemin={100}
              ></div>
            </div>
          </div>

          <div className="progress-block">
            <div className="progress-text">
              <div>
                <h6>Leads</h6>
                <p>Month Comparison</p>
              </div>
              <div className="progress-value">
                <span>
                  3.820
                  <ion-icon
                    name="arrow-down-outline"
                    class="red-down-arrow"
                  ></ion-icon>
                </span>
              </div>
            </div>
            <div className="progress animated-progess">
              <div
                className="progress-bar progress-sm progress-warning"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuemin={60}
                aria-valuemax={0}
                //aria-valuemin="100"
              ></div>
            </div>
          </div>

          <div className="progress-block">
            <div className="progress-text">
              <div>
                <h6>Income</h6>
                <p>Week Comparison</p>
              </div>
              <div className="progress-value">
                <span>
                  $4690
                  <ion-icon
                    name="arrow-up-outline"
                    class="green-up-arrow"
                  ></ion-icon>
                </span>
              </div>
            </div>
            <div className="progress animated-progess">
              <div
                className="progress-bar progress-sm progress-danger"
                role="progressbar"
                style={{ width: "20%" }}
                aria-valuemin={20}
                aria-valuemax={0}
              ></div>
            </div>
          </div>

          <div className="progress-block">
            <div className="progress-text">
              <div>
                <h6>Spendings</h6>
                <p>Month Comparison</p>
              </div>
              <div className="progress-value">
                <span>
                  $3820
                  <ion-icon
                    name="arrow-down-outline"
                    class="red-down-arrow"
                  ></ion-icon>
                </span>
              </div>
            </div>
            <div className="progress animated-progess">
              <div
                className="progress-bar progress-sm progress-success"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuemin={70}
                aria-valuemax={0}
              ></div>
            </div>
          </div>
        </div>

        <div className="chart-block">
          <div className="chart">
            <div id="column-chart" className="apex-charts" dir="ltr"></div>
          </div>
          <div className="bottom-block">
            <div className="task">
              <span>
                <strong>$342.000</strong>
              </span>
              <p>total sales</p>
            </div>

            <div className="budget">
              <span>
                <strong>$200.000</strong>
              </span>
              <p>Spendings</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarCharts;
