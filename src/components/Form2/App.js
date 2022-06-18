import React, { useState } from "react";

import { Grid, Button, Typography } from "@material-ui/core";
import Form2 from "./Form2.js";
const App = () => {
  const [cs, setcs] = useState(0);
  const [cv, setcv] = useState(0);
  var modal1 = document.getElementById("myModal11");
  const onfinish = (e) => {
    setcv(1);

    console.log(cs, "hereFROM2");
  };

  return (
    <>
      {/*first enter input field */}
      <div style={{ padding: "5px" }}>
        <Grid container>
          <Grid item sm={2}>
            <Typography variant="h5" className="typography">
              Get Results :-
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
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            // position: "relative",
          }}
        >
          <div
            style={{
              height: "0",
              width: "30%",
              zIndex: "1000",
              display: cv === 1 ? "flex" : "none",
              background: "white",
            }}
          >
            <div>
              <Form2
                style={{ background: "white", position: "absolute" }}
                cv={cv}
                setcv={setcv}
                cs={cs}
              />
            </div>
          </div>
        </div>
      </div>
      <hr style={{ border: "1px solid black" }} />
    </>
  );
};

export default App;
