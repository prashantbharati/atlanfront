import React from "react";
import cities from "./citydetails";
import Form from "./components/Form/Form1";
import BasicTable from "./Table";
const App = () => {
  return (
    <>
      <div>App</div>
      <Form />
      <BasicTable data1={cities} />
    </>
  );
};

export default App;
