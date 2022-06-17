import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from "./styles";

const Form = ({ modal, cs }) => {
  console.log(cs, "form");
  const [postData, setPostData] = useState({
    table: "",
    columns: "",
    where: "",
    values: "",
    orderby: "",
  });

  const classes = useStyles();

  const select = (data) => {
    console.log("selectquery");
    const query =
      "SELECT " +
      data.columns +
      " FROM " +
      data.table +
      " WHERE " +
      data.where +
      " ORDER BY " +
      data.orderby +
      ";";

    console.log(query);
  };

  const insert = (data) => {
    console.log("insertquery");
    const query =
      "INSERT INTO " +
      data.table +
      "(" +
      data.columns +
      ") VALUES (" +
      data.values +
      " );";
    console.log(query);
  };

  const update = (data) => {
    console.log("updatequery");

    var query =
      "UPDATE " +
      data.table +
      " SET " +
      data.columns +
      " TO " +
      data.values +
      " WHERE " +
      data.where +
      ";";

    console.log(query);
  };

  const deleteq = (data) => {
    const query = "DELETE FROM " + data.table + " WHERE " + data.where + ";";
    console.log(query);
  };

  useEffect(() => {});

  const clear = () => {
    setPostData({ table: "", columns: "", where: "", values: "", orderby: "" });
  };

  const close = () => {
    modal.style.display = "none";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    cs === 1 && select(postData);
    cs === 2 && insert(postData);
    cs === 3 && update(postData);
    cs === 4 && deleteq(postData);

    console.log("handlesubmit");
    clear();
    close();
    console.log(postData);
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
          {cs === 1
            ? "Select"
            : cs === 2
            ? "Insert"
            : cs === 3
            ? "Update"
            : "Delete"}
          {" Your Query"}
        </Typography>

        <TextField
          name="table"
          variant="outlined"
          label="Table"
          fullWidth
          value={postData.table}
          onChange={(e) => setPostData({ ...postData, table: e.target.value })}
        />

        {cs !== 4 && (
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
        )}

        {cs !== 2 && (
          <TextField
            name="where"
            variant="outlined"
            label="Where"
            fullWidth
            value={postData.where}
            onChange={(e) =>
              setPostData({ ...postData, where: e.target.value })
            }
          />
        )}

        {cs !== 1 && cs !== 4 && (
          <TextField
            name="values"
            variant="outlined"
            label="Values (coma seperated)"
            fullWidth
            value={postData.values}
            onChange={(e) =>
              setPostData({ ...postData, values: e.target.value.split(",") })
            }
          />
        )}

        {cs === 1 && (
          <TextField
            name="orderby"
            variant="outlined"
            label="Order By"
            fullWidth
            value={postData.orderby}
            onChange={(e) =>
              setPostData({ ...postData, orderby: e.target.value })
            }
          />
        )}

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
