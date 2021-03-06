import React from "react";

function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "#fff",
      }}
    >
      <div>
        <div
          className="spinner-border bg-white"
          style={{
            width: "5rem",
            height: "5rem",
          }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
