import { Button } from "@material-ui/core";
import React, { useState } from "react";
import BarChart1 from "./Barchart";

function Analatics(cities) {
  const [field, setfield] = useState(0);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setfield(1);
        }}
      >
        Rain
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setfield(2);
        }}
      >
        Days
      </Button>

      {field !== 0 && <BarChart1 cities={cities} field={field} />}
    </>
  );
}

export default Analatics;
