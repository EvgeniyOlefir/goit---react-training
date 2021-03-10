// import "./Navigation.scss";
import { createUseStyles } from "react-jss";
import NavLink from "./NavLink";
import { routes } from "../../routes";

const useStyles = createUseStyles({
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
  },
});

const Navigation = () => {
  const x = 5;
  const classes = useStyles(x);

  return (
    <div className={classes.navigation}>
      {routes.map(({ path, label }) => (
        <NavLink path={path} label={label} />
      ))}
    </div>
  );
};

export default Navigation;
