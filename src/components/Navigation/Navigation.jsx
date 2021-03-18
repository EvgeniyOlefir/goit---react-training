// import "./Navigation.scss";

// import NavLink from './NavLink';
// import { routes } from '../../routes';
import { NavLink } from 'react-router-dom';
import useStyles from './style';

const Navigation = () => {
  const x = 5;
  const classes = useStyles(x);

  return (
    <div className={classes.navigation}>
      {/* {routes.map(({ path, label }) => (
        <NavLink key={path} path={path} label={label} />
      ))} */}
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/users-page">Users</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/todos">Todos</NavLink>
    </div>
  );
};

export default Navigation;
