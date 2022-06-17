import React, { useState } from "react";
import App1 from "./components/Form1/App";
import App2 from "./components/Form2/App";
import cities from "./details/citydetails";
import cities2 from "./details/citydetails2";
import cities3 from "./details/citydetails3";
import BasicTable from "./Table";
import Analatics from "./components/Analatics/Analatics";

import Dropdown from "./components/dropdown/dropdown";
import "./index.css";
function App() {
  const [viewType, setViewType] = useState("table");
  const [ts, setts] = useState(0);
  const city4 = [];
  return (
    <>
      <Dropdown ts={ts} setts={setts} />
      <App1 />;
      <App2 />;
      <div style={{ height: "70vh", overflow: "scroll" }}>
        {viewType === "table" ? (
          <BasicTable
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
            view={viewType}
            setViewType={setViewType}
            transactions={cities}
          />
        )}
      </div>
    </>
  );
}

export default App;
