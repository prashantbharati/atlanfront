import React from "react";
import App1 from "./components/Form1/App";
import App2 from "./components/Form2/App";
import cities from "./citydetails";
import BasicTable from "./Table";
function App() {
  return (
    <>
      <App1 />;
      <App2 />;
      <div style={{ height: "70vh", overflow: "scroll" }}>
        <BasicTable data1={cities} />
      </div>
    </>
  );
}

export default App;
