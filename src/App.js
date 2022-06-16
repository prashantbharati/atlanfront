import React from "react";
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
const App = () => {
  return (
    <>
      {/*first enter input field */}

      <Grid container>
        <Grid item sm={3}>
          <Button variant="contained" color="primary">
            Search
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
          display: "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "30%" }}>
          <Form />
        </div>
      </div>
      <div style={{ height: "70vh", overflow: "scroll" }}>
        <BasicTable data1={cities} />
      </div>
    </>
  );
};

export default App;
