import React from 'react';

function Admin() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-sm-6 col-12'>
          <p className='pt-3'>
            Bienvenido, <b>*Nombre de usuario*</b>
          </p>

          <div>
            <h3>¿Que desea publicar?</h3>
            <input
              className='form-control mb-3'
              placeholder='Título'
              type='text'
            ></input>
            <form className='form-floating'>
              <textarea
                className='form-control'
                placeholder='Escriba comentario aquí'
                id='floatingTextarea'
                style={{ height: '200px' }}
              ></textarea>
              <label htmlFor='floatingTextarea'>
                Comentario de publicación
              </label>
              <button
                className='btn btn-success mt-3 d-flex justify-content-end align-items-end text-right text-end'
                type='submit'
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        <div className='col-md-6 col-sm-6 col-12'>
          <div>
            <h3 className='pt-3'>Publicaciones anteriores</h3>
            <div className='col-md-12 border rounded my-3'>
              <div className='d-flex justify-content-between align-items-center mb-4 p-2'>
                <img
                  src='https://dummyimage.com/40x40/ccc/fff.png'
                  alt='ProfilePicture'
                  className='border rounded '
                ></img>
                <h3 className='p-0 m-0'>Título</h3>
                <p className='text-muted p-0 m-0'>Viernes</p>
              </div>
              <p className='py-0 my-0 ps-2 pe-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique corporis ipsa qui perspiciatis libero fugiat eos
                eligendi illum laboriosam pariatur corrupti voluptatum, repellat
                aliquid dolores soluta aspernatur laborum? Doloribus, nulla!
              </p>
              <div className='d-flex justify-content-between align-items-center mt-4 p-2'>
                <p className='p-0 m-0'>Autor</p>
                <p className='text-muted p-0 m-0'>11-21-2021</p>
                <button className='btn p-0 m-0 text-primary'>Ver más</button>
              </div>
            </div>
            <div className='col-md-12 border rounded my-3'>
              <div className='d-flex justify-content-between align-items-center mb-4 p-2'>
                <img
                  src='https://dummyimage.com/40x40/ccc/fff.png'
                  alt='ProfilePicture'
                  className='border rounded '
                ></img>
                <h3 className='p-0 m-0'>Título</h3>
                <p className='text-muted p-0 m-0'>Viernes</p>
              </div>
              <p className='py-0 my-0 ps-2 pe-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique corporis ipsa qui perspiciatis libero fugiat eos
                eligendi illum laboriosam pariatur corrupti voluptatum, repellat
                aliquid dolores soluta aspernatur laborum? Doloribus, nulla!
              </p>
              <div className='d-flex justify-content-between align-items-center mt-4 p-2'>
                <p className='p-0 m-0'>Autor</p>
                <p className='text-muted p-0 m-0'>11-21-2021</p>
                <button className='btn p-0 m-0 text-primary'>Ver más</button>
              </div>
            </div>
            <div className='col-md-12 border rounded my-3'>
              <div className='d-flex justify-content-between align-items-center mb-4 p-2'>
                <img
                  src='https://dummyimage.com/40x40/ccc/fff.png'
                  alt='ProfilePicture'
                  className='border rounded '
                ></img>
                <h3 className='p-0 m-0'>Título</h3>
                <p className='text-muted p-0 m-0'>Viernes</p>
              </div>
              <p className='py-0 my-0 ps-2 pe-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique corporis ipsa qui perspiciatis libero fugiat eos
                eligendi illum laboriosam pariatur corrupti voluptatum, repellat
                aliquid dolores soluta aspernatur laborum? Doloribus, nulla!
              </p>
              <div className='d-flex justify-content-between align-items-center mt-4 p-2'>
                <p className='p-0 m-0'>Autor</p>
                <p className='text-muted p-0 m-0'>11-21-2021</p>
                <button className='btn p-0 m-0 text-primary'>Ver más</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
