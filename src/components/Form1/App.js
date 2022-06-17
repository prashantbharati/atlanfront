import React, { useState } from "react";

import Form from "./Form1";

import { Grid, Button } from "@material-ui/core";
import "./index.css";
const App = () => {
  const [cs, setcs] = useState(0);

  var modal = document.getElementById("myModal");
  const onfinish = (e) => {
    console.log(modal.style, "style");
    modal.style.display = "flex";

    console.log(cs, "here");
  };

  return (
    <>
      {/*first enter input field */}

      <Grid container>
        <Grid item sm={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={async () => {
              await setcs(1);
              console.log(cs);
              onfinish();
            }}
          >
            Select
          </Button>
        </Grid>
        <Grid item sm={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setcs(2);
              onfinish();
            }}
          >
            Insert
          </Button>
        </Grid>
        <Grid item sm={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setcs(3);
              onfinish();
            }}
          >
            Update
          </Button>
        </Grid>
        <Grid item sm={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setcs(4);
              onfinish();
            }}
          >
            Delete
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
        id="myModal"
      >
        <div style={{ width: "30%" }}>
          {
            (window.onclick = function (event) {
              if (event.target === modal) {
                modal.style.display = "none";
              }
            })
          }
          <Form modal={modal} cs={cs} />
        </div>
      </div>
    </>
  );
};

export default App;
