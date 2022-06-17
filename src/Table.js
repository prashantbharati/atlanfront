import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ data1, ts }) {
  console.log(ts, "tsvalue");
  return (
    <>
      {ts !== 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", fontSize: "25px" }}>
                  City_Id
                </TableCell>
                <TableCell
                  align="right"
                  style={{ fontWeight: "bold", fontSize: "25px" }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="right"
                  style={{ fontWeight: "bold", fontSize: "25px" }}
                >
                  Latitude
                </TableCell>
                <TableCell
                  align="right"
                  style={{ fontWeight: "bold", fontSize: "25px" }}
                >
                  Longitude
                </TableCell>
                <TableCell
                  align="right"
                  style={{ fontWeight: "bold", fontSize: "25px" }}
                >
                  Rain
                </TableCell>
                <TableCell
                  align="right"
                  style={{ fontWeight: "bold", fontSize: "25px" }}
                >
                  Days
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data1.map((row) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.ID}
                  </TableCell>
                  <TableCell align="right">{row.Name}</TableCell>
                  <TableCell align="right">{row.geometry[0]}</TableCell>
                  <TableCell align="right">{row.geometry[1]}</TableCell>
                  <TableCell align="right">{row.rain}</TableCell>
                  <TableCell align="right">{row.days}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
