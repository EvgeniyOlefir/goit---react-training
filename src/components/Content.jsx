// import { routes } from '../routes';
import { Route } from 'react-router-dom';
import styles from './content.module.scss';
import UsersPage from '../pages/UsersPage';
import HomePage from '../pages/HomePage';
// import HomeWorksPage from '../pages/HomeWorksPage';
// import AboutPage from '../pages/AboutPage';
import BooksPage from '../pages/BooksPage';
// import CountersPage from '../pages/CountersPage';
import UserDetailsPage from '../pages/UserDetailsPage';
import TodosPage from '../pages/TodosPage';

const Content = () => {
  // const { pathname } = window.location;
  return (
    <div className={styles.content}>
      {/* {routes.map(
        ({ path, component: Component }) => pathname === path && <Component key={path} />
      )} */}
      {/* {pathname === "/" && <HomePage />}
      {pathname === "/users-page" && <UsersPage />}
      {pathname === "/home-works" && <HomeWorksPage />}
      {pathname === "/about" && <AboutPage />}
      {pathname === "/books" && <BooksPage />} */}
      <Route path="/" exact component={HomePage} />
      <Route path="/users-page" component={UsersPage} />
      <Route path="/user-details" component={UserDetailsPage} />
      <Route path="/books" component={BooksPage} />
      <Route path="/todos" component={TodosPage} />
    </div>
  );
};

export default Content;
