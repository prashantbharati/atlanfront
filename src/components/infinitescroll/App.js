import { useState, useRef, useCallback } from "react";
import useBookSearch from "./useBookSearch";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ padding: "10px" }}
      >
        <input type="text" value={query} onChange={handleSearch}></input>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", fontSize: "25px" }}>
                Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book, index) => {
              if (books.length === index + 1) {
                return (
                  <div ref={lastBookElementRef} key={book}>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {book}
                      </TableCell>
                    </TableRow>
                  </div>
                );
              } else {
                return <div key={book}>{book}</div>;
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}
