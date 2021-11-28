import React from "react";

function Login() {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-12">
          <div className="d-flex align-items-center align-content-center justify-content-center vh-100">
            <div className="border rounded p-4">
              <h1 className="text-center">Iniciar Sección</h1>
              <form className="form-control border-0     w-100 m-auto mb-4">
                <label for="email" className="pb-1">
                  Email:
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                ></input>
                <label for="password" className="pt-2 pb-1">
                  Password:
                </label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="form-control mb-2"
                ></input>
                <button className="form-control btn btn-success">
                  Iniciar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
