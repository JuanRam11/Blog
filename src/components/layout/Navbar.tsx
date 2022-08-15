import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-light bg-azul d-flex text-white'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          {/*   <img
            src={icon}
            alt=""
            width="115"
            height="40"
            className="d-inline-block align-text-top me-2"
          ></img> */}
          <b className='align-middle text-white'>Blog</b>
        </Link>
        <Link
          to='/login'
          className='text-white'
          style={{ textDecoration: 'none' }}
        >
          Iniciar Sección
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
