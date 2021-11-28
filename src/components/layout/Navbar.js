import React from "react";
import icon from "./praxisLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-azul d-flex text-white">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">
          {/*   <img
            src={icon}
            alt=""
            width="115"
            height="40"
            className="d-inline-block align-text-top me-2"
          ></img> */}
          <b className="align-middle text-white">Blog</b>
        </Link>
        <Link
          to="/login"
          className="text-white"
          style={{ textDecoration: "none" }}
        >
          Iniciar Sección
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
