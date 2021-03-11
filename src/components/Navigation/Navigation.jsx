// import "./Navigation.scss";

import NavLink from "./NavLink";
import { routes } from "../../routes";
import useStyles from "./style";

const Navigation = () => {
  const x = 5;
  const classes = useStyles(x);

  return (
    <div className={classes.navigation}>
      {routes.map(({ path, label }) => (
        <NavLink key={path} path={path} label={label} />
      ))}
    </div>
  );
};

export default Navigation;
