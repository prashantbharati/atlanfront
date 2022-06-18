import React, { useState } from "react";

import Form from "./Form1";

import { Grid, Button, Typography } from "@material-ui/core";
import "./index.css";
const App = () => {
  const [cs, setcs] = useState(0);
  const [cv, setcv] = useState(0);

  const onfinish = (e) => {
    setcv(1);
    console.log(cs, "here");
  };

  return (
    <>
      {/*first enter input field */}
      <div style={{ padding: "5px" }}>
        <Grid container>
          <Grid item sm={4}>
            <Typography variant="h5" className="typography">
              Create Your Query :-
            </Typography>
          </Grid>

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
              Select
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
              Insert
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
              Update
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
              Delete
            </Button>
          </Grid>
        </Grid>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "0",
            width: "30%",
            zIndex: "1000",

            display: cv === 1 ? "flex" : "none",
            position: "relative",
          }}
        >
          <div>
            <Form cv={cv} setcv={setcv} cs={cs} />
          </div>
        </div>
      </div>
      <hr style={{ border: "1px solid black" }} />
    </>
  );
};

export default App;
