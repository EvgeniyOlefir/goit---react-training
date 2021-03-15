import { createUseStyles } from "react-jss";

export default createUseStyles({
  navigation: {
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid#000",
    listStyle: "none",
    margin: (x) => {
      return x > 5 ? "10px" : "0px";
    },
    padding: 10,
    width: 200,
    overflow: "auto",
  },
});
