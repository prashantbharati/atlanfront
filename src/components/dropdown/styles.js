import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  query: {
    height: "60vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    backgroundColor: "#51557E",
  },
  input: {
    color: "white",
  },
  label: { color: "white" },
}));
