import React, { useState } from "react";
import cities from "./citydetails";
import Form from "./components/Form/Form1";
import BasicTable from "./Table";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import "./index.css";
const App = () => {
  const [fd, setfd] = useState(false);

  const onfinish = () => {
    setfd(true);
  };

  return (
    <>
      {/*first enter input field */}

      <Grid container>
        <Grid item sm={3}>
          <Button variant="contained" color="primary" onClick={onfinish}>
            Select
          </Button>
        </Grid>
        <Grid item sm={3}>
          <Button variant="contained" color="primary">
            Insert
          </Button>
        </Grid>
        <Grid item sm={3}>
          <Button variant="contained" color="primary">
            Update
          </Button>
        </Grid>
        <Grid item sm={3}>
          <Button variant="contained" color="primary">
            Delete
          </Button>
        </Grid>
      </Grid>

      <div
        style={{
          display: fd === true ? "flex" : "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          position: "fixed",
          backgroundColor: "rgba(0,0,0,0.4)",
          // overflow: "auto",
          /* Fallback color */

          zIndex: "1",
        }}
      >
        <div style={{ width: "50%" }}>
          <Form fd={fd} setfd={setfd} />
        </div>
      </div>

      <div style={{ height: "70vh", overflow: "scroll" }}>
        <BasicTable data1={cities} />
      </div>
    </>
  );
};

export default App;
