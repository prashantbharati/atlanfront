import React, { useState } from "react";
import App1 from "./components/Form1/App";
import App2 from "./components/Form2/App";
import cities from "./details/citydetails";
import BasicTable from "./Table";
import Analatics from "./components/Analatics/Analatics";
import {
  UnorderedListOutlined,
  AreaChartOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
function App() {
  const [viewType, setViewType] = useState("table");
  return (
    <>
      <App1 />;
      <App2 />;
      <div className="view-switch mx-5">
        <UnorderedListOutlined onClick={() => setViewType("table")} size={30} />
        <AreaChartOutlined onClick={() => setViewType("analytics")} size={30} />
      </div>
      <div style={{ height: "70vh", overflow: "scroll" }}>
        {viewType === "table" ? (
          <BasicTable data1={cities} />
        ) : (
          <Analatics transactions={cities} />
        )}
      </div>
    </>
  );
}

export default App;
