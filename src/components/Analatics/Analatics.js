import { Button } from "@material-ui/core";
import React, { useState } from "react";
import BarChart1 from "./Barchart";
import { UnorderedListOutlined, AreaChartOutlined } from "@ant-design/icons";
function Analatics({ viewType, setViewType }, cities) {
  const [field, setfield] = useState(0);

  return (
    <>
      <div className="view-switch mx-5">
        <UnorderedListOutlined onClick={() => setViewType("table")} size={30} />
        <AreaChartOutlined onClick={() => setViewType("analytics")} size={30} />
      </div>
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
