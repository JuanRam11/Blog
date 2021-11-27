import React from "react";
import icon from "./praxisLogo.png";

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-primary d-flex">
      <div class="container-fluid">
        <a className="navbar-brand" href>
          {/*   <img
            src={icon}
            alt=""
            width="115"
            height="40"
            className="d-inline-block align-text-top me-2"
          ></img> */}
          <b className="align-middle">Blog</b>
        </a>
        <div>Iniciar Sección</div>
      </div>
    </nav>
  );
}

export default Navbar;
