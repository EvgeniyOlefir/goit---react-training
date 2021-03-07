import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import HomeWorksPage from "../pages/HomeWorksPage";
import AboutPage from "../pages/AboutPage";

const Content = () => {
  const { pathname } = window.location;
  return (
    <div className="content">
      {pathname === "/" && <HomePage />}
      {pathname === "/users-page" && <UsersPage />}
      {pathname === "/home-works" && <HomeWorksPage />}
      {pathname === "/about" && <AboutPage />}
    </div>
  );
};

export default Content;
