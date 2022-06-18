import React, { useState } from "react";
import App1 from "./components/Form1/App";
import App2 from "./components/Form2/App";
import cities from "./details/citydetails";
import cities2 from "./details/citydetails2";
import cities3 from "./details/citydetails3";
import BasicTable from "./Table";
import Analatics from "./components/Analatics/Analatics";
import { UnorderedListOutlined, AreaChartOutlined } from "@ant-design/icons";
import Dropdown from "./components/dropdown/dropdown";
import "./index.css";
import useStyles from "./styles";
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
      <Dropdown ts={ts} setts={setts} />
      <App1 />
      <App2 />
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
          </div>
        </div>
      </div>
      {ts !== 0 && (
        <div className={classes.Analatics}>
          {viewType === "table" ? (
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
          ) : (
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
          )}
        </div>
      )}
    </>
  );
}

export default App;
