import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from "./styles";

const Form = ({ modal, cs }) => {
  console.log(cs, "form");
  const [postData, setPostData] = useState({
    table: "",
    columns: "",
    where: "",
    as: "",
  });

  const classes = useStyles();

  const query = (data) => {
    const q =
      "SELECT " +
      (cs === 1
        ? "AVG"
        : cs === 2
        ? "COUNT"
        : cs === 3
        ? "MAX"
        : cs === 4
        ? "MIN"
        : "SUM") +
      "(" +
      data.columns +
      ") AS " +
      data.as +
      " FROM " +
      data.table +
      " WHERE" +
      data.where;

    console.log(q);
  };

  useEffect(() => {});

  const clear = () => {
    setPostData({ table: "", columns: "", where: "", as: "" });
  };

  const close = () => {
    modal.style.display = "none";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    query(postData);

    console.log("handlesubmit");
    console.log(postData);
    await clear();
    close();
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {"Find "}
          {cs === 1
            ? "Average"
            : cs === 2
            ? "Count"
            : cs === 3
            ? "Maximum"
            : cs === 4
            ? "Minimum"
            : "Sum"}
        </Typography>

        <TextField
          name="table"
          variant="outlined"
          label="Table"
          fullWidth
          value={postData.table}
          onChange={(e) => setPostData({ ...postData, table: e.target.value })}
        />

        <TextField
          name="columns"
          variant="outlined"
          label="Columns (coma seperated) (* for all)"
          fullWidth
          value={postData.columns}
          onChange={(e) =>
            setPostData({ ...postData, columns: e.target.value })
          }
        />

        <TextField
          name="where"
          variant="outlined"
          label="Where"
          fullWidth
          value={postData.where}
          onChange={(e) => setPostData({ ...postData, where: e.target.value })}
        />

        <TextField
          name="as"
          variant="outlined"
          label="As"
          fullWidth
          value={postData.as}
          onChange={(e) => setPostData({ ...postData, as: e.target.value })}
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          backgroundColor="#53BF9D"
          size="small"
          onClick={close}
          fullWidth
        >
          Close
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
