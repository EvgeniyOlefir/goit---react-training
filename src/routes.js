import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import HomeWorksPage from "./pages/HomeWorksPage";
import AboutPage from "./pages/AboutPage";
import BooksPage from "./pages/BooksPage";

export const routes = [
  {
    path: "/",
    label: "Home",
    component: HomePage,
  },
  {
    path: "/users-page",
    label: "UsersPage",
    component: UsersPage,
  },
  {
    path: "/home-works",
    label: "HomeWorksPage",
    component: HomeWorksPage,
  },
  {
    path: "/about",
    label: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/books",
    label: "BooksPage",
    component: BooksPage,
  },
];
