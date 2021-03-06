import React from 'react';

const year = new Date();

function Footer() {
  return (
    <div className='container'>
      <div className='row'>
        <footer class='d-flex flex-wrap justify-content-between align-items-center py-3 pb-3 mb-0 my-4 border-top'>
          <div class='col-md-4 d-flex align-items-center'>
            <a href class='me-2 mb-md-0 text-muted text-decoration-none lh-1'>
              <img width='24' alt='Icon' className='ms-2'></img>
            </a>
            <span class='text-muted'>
              &copy; {year.getFullYear()} Grupo Sanus, SRL
            </span>
          </div>

          <ul class='nav col-md-4 justify-content-end list-unstyled d-flex'>
            <li class='ms-3'>
              <a class='text-muted' href='https://'>
                <i class='bi bi-instagram'></i>

                {/*       <svg class="bi" width="24" height="24">
                  <use xlink:href="#twitter" />
                </svg> */}
              </a>
            </li>
            <li class='ms-3'>
              <a class='text-muted' href='https://'>
                <i class='bi bi-twitter'></i>
                {/*          <svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram" />
                </svg> */}
              </a>
            </li>
            <li class='ms-3'>
              <a class='text-muted' href='https://'>
                <i class='bi bi-facebook'></i>
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
