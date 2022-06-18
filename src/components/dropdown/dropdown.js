import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField, Typography } from "@material-ui/core";
import useStyles from "./styles";
export default function BasicSelect({ ts, setts }) {
  const [query, setquery] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event) => {
    setquery(event.target.value);

    console.log(query);
  };

  const handleChange1 = (event) => {
    setquery(11);

    console.log(query);
  };

  return (
    <>
      <div className={classes.query}>
        <Typography style={{ fontFamily: "Montserrat" }} variant="h4">
          Enter Your Query
        </Typography>

        <div style={{ width: "60%" }}>
          <TextField
            name="table"
            fullWidth
            variant="standard"
            onMouseLeave={handleChange1}
            label="Table"
          />
        </div>

        <Box style={{ width: "50%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select Recent Queries
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange}
              value={query}
              label="query"
            >
              <MenuItem value={1}>SELECT * FROM TABLE_1</MenuItem>
              <MenuItem value={2}>SELECT * FROM TABLE_2</MenuItem>
              <MenuItem value={3}>SELECT * FROM TABLE_3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setts(query === 11 ? 1 : query);
            console.log(ts);
          }}
        >
          Run Query
        </Button>
      </div>
      <hr style={{ border: "1px solid black" }} />
    </>
  );
}
