import React from "react";
import "./NavbarStyles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  const path = window.location.pathname;

  const LinkComponent = ({ to, children }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to}>{children}</Link>
      </li>
    );
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Example
      </Link>
      <ul>
        <LinkComponent to="/page1" >Page 1</LinkComponent>
        <LinkComponent to="/page2" >Page 2</LinkComponent>
      </ul>
    </nav>
  );
};

export default Navbar;
