import React from "react";
import { useCSVReader } from "react-papaparse";
const App = () => {
  const CSVReader = useCSVReader();
  return (
    <>
      <div>App</div>
      <CSVReader
        onUploadAccepted={(results) => {
          console.log("---------------------------");
          console.log(results);
          console.log("---------------------------");
        }}
        onError={(error) => console.log(error)}
      ></CSVReader>
    </>
  );
};

export default App;
