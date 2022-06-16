import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from "./styles";

const Form = ({ fd, setfd, cs }) => {
  console.log(cs, "form");
  const [postData, setPostData] = useState({
    table: "",
    columns: "",
    where: "",
    values: "",
    orderby: "",
  });

  const classes = useStyles();

  useEffect(() => {});

  const clear = () => {
    setfd(false);
    setPostData({ table: "", columns: "", where: "", values: "", orderby: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clear();
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
            label="Columns"
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
            label="Where (coma seperated)"
            fullWidth
            value={postData.where}
            onChange={(e) =>
              setPostData({ ...postData, where: e.target.value.split(",") })
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
          onClick={clear}
          fullWidth
        >
          Close
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
