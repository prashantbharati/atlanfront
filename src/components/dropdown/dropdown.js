import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Typography } from "@material-ui/core";

export default function BasicSelect({ ts, setts }) {
  const [query, setquery] = React.useState(0);

  const handleChange = (event) => {
    setquery(event.target.value);
    console.log(query);
  };

  const handleClick = (e) => {
    setquery(e.target.value);
    console.log(query);
  };

  return (
    <div
      style={{
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Typography style={{ fontFamily: "Montserrat" }} variant="h4">
        Enter Your Query
      </Typography>

      <Box style={{ width: "50%" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Select Recent Queries
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={query}
            label="query"
            onChange={handleChange}
          >
            <MenuItem value={1}>SELECT * FROM TABLE_1</MenuItem>
            <MenuItem value={2}>SELECT * FROM TABLE_2</MenuItem>
            <MenuItem value={3}>SELECT * FROM TABLE_3</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" color="primary" onClick={setts(query)}>
        Run Query
      </Button>
    </div>
  );
}
