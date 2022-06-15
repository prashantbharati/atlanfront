import React from "react";
import cities from "./citydetails";
import BasicTable from "./Table";
const App = () => {
  return (
    <>
      <div>App</div>

      <BasicTable data1={cities} />
    </>
  );
};

export default App;
