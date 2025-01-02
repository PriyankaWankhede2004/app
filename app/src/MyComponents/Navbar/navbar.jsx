import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-heading" href="/">
        <span className="navbar-toggler-icon"></span>
          Task Management
        </a>
     </nav>
  );
};

export default Navbar;