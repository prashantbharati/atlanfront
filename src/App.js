import React, { useState, lazy, Suspense } from "react";

import cities from "./details/citydetails";
import cities2 from "./details/citydetails2";
import cities3 from "./details/citydetails3";

import {
  UnorderedListOutlined,
  AreaChartOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";

import "./index.css";
import useStyles from "./styles";
import App3 from "./components/infinitescroll/App.js";
const App1 = lazy(() => import("./components/Form1/App"));
const App2 = lazy(() => import("./components/Form2/App"));
// const App3 = lazy(() => import("./components/infinitescroll/App"));
const Dropdown = lazy(() => import("./components/dropdown/dropdown"));
const BasicTable = lazy(() => import("./components/Table/Table"));
const Analatics = lazy(() => import("./components/Analatics/Analatics"));

function App() {
  const classes = useStyles();
  const [viewType, setViewType] = useState("table");
  const [ts, setts] = useState(0);
  const city4 = [];
  return (
    <>
      <div className="layout">
        <div className="header d-flex justify-content-center align-items-center">
          <div>
            <h1 className="logo">SQL Tracker</h1>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading.....</div>}>
        <Dropdown ts={ts} setts={setts} />
      </Suspense>

      <Suspense fallback={<div>Loading.....</div>}>
        <App1 />
      </Suspense>

      <Suspense fallback={<div>Loading.....</div>}>
        <App2 />
      </Suspense>

      <div className="d-flex justify-content-center align-items-center">
        <div className={classes.lists}>
          <div className="view-switch mx-5">
            <UnorderedListOutlined
              className={`mx-3 ${
                viewType === "table" ? "active-icon" : "inactive-icon"
              } `}
              onClick={() => setViewType("table")}
              size={30}
            />
            <AreaChartOutlined
              className={`${
                viewType === "analytics" ? "active-icon" : "inactive-icon"
              } `}
              onClick={() => setViewType("analytics")}
              size={30}
            />
            <AlignLeftOutlined
              className="mx-3"
              onClick={() => setViewType("BookList")}
            />
          </div>
        </div>
      </div>
      {ts !== 0 && (
        <div className={classes.Analatics}>
          {viewType === "table" ? (
            <Suspense fallback={<div>Loading.....</div>}>
              <BasicTable
                elevation={6}
                ts={ts}
                setts={setts}
                data1={
                  ts === 1
                    ? cities
                    : ts === 2
                    ? cities2
                    : ts === 3
                    ? cities3
                    : city4
                }
              />
            </Suspense>
          ) : viewType === "BookList" ? (
            <App3 />
          ) : (
            <Suspense fallback={<div>Loading.....</div>}>
              <Analatics
                elevation={6}
                transactions={
                  ts === 1
                    ? cities
                    : ts === 2
                    ? cities2
                    : ts === 3
                    ? cities3
                    : city4
                }
              />
            </Suspense>
          )}
        </div>
      )}
      {ts === 0 && viewType === "BookList" ? <App3 /> : ""}
    </>
  );
}

export default App;
