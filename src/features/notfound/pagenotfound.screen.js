import React from "react";

const PageNotFound = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <p className="text-black-50 d-flex justify-content-center fs-1">
            404
          </p>

          <p className="text-black-50 d-flex justify-content-center fs-2">
            Oops! Page not found
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
