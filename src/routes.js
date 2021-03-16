import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
// import HomeWorksPage from './pages/HomeWorksPage';
// import AboutPage from './pages/AboutPage';
import BooksPage from './pages/BooksPage';
import CountersPage from './pages/CountersPage';
import UserDetailsPage from './pages/UserDetailsPage';
import TodosPage from './pages/TodosPage';

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
  },
  {
    path: '/users-page',
    label: 'UsersPage',
    component: UsersPage,
  },
  // {
  //   path: "/home-works",
  //   label: "HomeWorksPage",
  //   component: HomeWorksPage,
  // },
  // {
  //   path: "/about",
  //   label: "AboutPage",
  //   component: AboutPage,
  // },
  {
    path: '/user-details',
    label: 'User Details',
    component: UserDetailsPage,
  },
  {
    path: '/counters',
    label: 'Counters',
    component: CountersPage,
  },
  {
    path: '/books',
    label: 'BooksPage',
    component: BooksPage,
  },
  {
    path: '/todos',
    label: 'Todos',
    component: TodosPage,
  },
];
