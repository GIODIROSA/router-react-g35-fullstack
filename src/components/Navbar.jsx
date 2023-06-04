import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-navbar-color">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Happy Cake
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link btn " to="/">
                Inicio
              </NavLink>
              <NavLink className="nav-link btn " to="/blog">
                Blog
              </NavLink>
              <NavLink className="nav-link btn " to="/contacto">
                Contacto
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

{
  /* <NavLink classNameName="btn btn-outline-primary" to="/">
Inicio
</NavLink>

<NavLink classNameName="btn btn-outline-primary" to="/blog">
                Blog
              </NavLink>

<NavLink classNameName="btn btn-outline-primary" to="/contacto">
Contacto
</NavLink> */
}
