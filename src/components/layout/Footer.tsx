import React from 'react';

const year = new Date();

function Footer() {
  return (
    <div className='container'>
      <div className='row'>
        <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 pb-3 mb-0 my-4 border-top'>
          <div className='col-md-4 d-flex align-items-center'>
            <a
              href='/'
              className='me-2 mb-md-0 text-muted text-decoration-none lh-1'
            >
              <img width='24' alt='Icon' className='ms-2'></img>
            </a>
            <span className='text-muted'>
              &copy; {year.getFullYear()} *Nombre empresa*,
            </span>
          </div>

          <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
            <li className='ms-3'>
              <a className='text-muted' href='https://'>
                <i className='bi bi-instagram'></i>

                {/*       <svg class="bi" width="24" height="24">
                  <use xlink:href="#twitter" />
                </svg> */}
              </a>
            </li>
            <li className='ms-3'>
              <a className='text-muted' href='https://'>
                <i className='bi bi-twitter'></i>
                {/*          <svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram" />
                </svg> */}
              </a>
            </li>
            <li className='ms-3'>
              <a className='text-muted' href='https://'>
                <i className='bi bi-facebook'></i>
                {/*       <svg class="bi" width="24" height="24">
                  <use xlink:href="#facebook" />
                </svg> */}
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
