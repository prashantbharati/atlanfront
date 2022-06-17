import React, { useState } from "react";

import { Grid, Button } from "@material-ui/core";
import Form2 from "./Form2.js";
const App = () => {
  const [cs, setcs] = useState(0);

  var modal1 = document.getElementById("myModal11");
  const onfinish = (e) => {
    modal1.style.display = "flex";

    console.log(cs, "hereFROM2");
  };

  return (
    <>
      {/*first enter input field */}

      <Grid container>
        <Grid item sm={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={async () => {
              await setcs(1);
              console.log(cs);
              onfinish();
            }}
          >
            AVG
          </Button>
        </Grid>
        <Grid item sm={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setcs(2);
              onfinish();
            }}
          >
            COUNT
          </Button>
        </Grid>
        <Grid item sm={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setcs(3);
              onfinish();
            }}
          >
            MAX
          </Button>
        </Grid>
        <Grid item sm={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setcs(4);
              onfinish();
            }}
          >
            MIN
          </Button>
        </Grid>
        <Grid item sm={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setcs(5);
              onfinish();
            }}
          >
            SUM
          </Button>
        </Grid>
      </Grid>

      <div
        style={{
          display: "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          position: "fixed",
          backgroundColor: "rgba(0,0,0,0.4)",

          zIndex: "1",
        }}
        id="myModal11"
      >
        <div style={{ width: "30%" }}>
          {
            (window.onclick = function (event) {
              if (event.target === modal1) {
                modal1.style.display = "none";
              }
            })
          }
          <Form2 modal1={modal1} cs={cs} />
        </div>
      </div>
    </>
  );
};

export default App;
