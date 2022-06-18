import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  lists: {
    border: "1px solid black",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "10px",
  },
  Analatics: {
    height: "70vh",
    overflow: "scroll",
    margin: "10px",
    elevation: "10",
    border: "5px solid black",
  },
}));
