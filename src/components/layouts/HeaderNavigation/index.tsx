import { Link } from "react-router-dom";
import "./styles.scss";

export const HeaderNavigation = () => {
  return (
    <div className="header-navigation">
      <div className="header-navigation-container">
        <div className="header-navigation-logo">
          <h3>Blog</h3>
        </div>
        <div className="header-navigation-links">
          <Link className="header-navigation-link" to="/">
            Home
          </Link>
          <Link className="header-navigation-link" to="/about">
            About
          </Link>
          <Link className="header-navigation-link" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
