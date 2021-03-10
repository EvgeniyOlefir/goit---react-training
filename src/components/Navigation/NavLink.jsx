import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  link: {
    textDecoration: "none",
    padding: "10px",
    color: "#000",

    "&:hover": {
      backgroundColor: "#e0dff2",
    },
  },

  activeLink: {
    backgroundColor: "#2f2e73",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#151433",
    },
  },
});

const NavLink = ({ path, label }) => {
  const classes = useStyles();
  const { pathname } = window.location;

  return (
    <a
      className={[classes.link, pathname === path ? classes.activeLink : ""].join(" ")}
      href={path}
    >
      {label}
    </a>
  );
};

export default NavLink;
