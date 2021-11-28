import React from "react";

function NoFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-12">
          <div className="text-center d-flex vh-100 justify-content-center align-content-center flex-column">
            <h1>Error 404 - Page Not Found</h1>
            <h4>Page you are looking for does not exist</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoFound;
