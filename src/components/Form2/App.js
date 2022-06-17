import React, { useState } from "react";

import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import Form2 from "./Form2.js";
const App = () => {
  const [cs, setcs] = useState(0);

  var modal = document.getElementById("myModal1");
  const onfinish = (e) => {
    modal.style.display = "flex";

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
        id="myModal1"
      >
        <div style={{ width: "30%" }}>
          {
            (window.onclick = function (event) {
              if (event.target === modal) {
                modal.style.display = "none";
              }
            })
          }
          <Form2 modal={modal} cs={cs} />
        </div>
      </div>
    </>
  );
};

export default App;
