import React, { useEffect, useState } from "react";

function AlertComponent({ error }) {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setToggle(false);
    }, 10000);
  }, []);

  return (
    <div
      className={`alert alert-warning alert-dismissible fade ${
        toggle && "show"
      }`}
      role="alert"
      style={{
        position: "absolute",
        margin: "20px",
        top: 0,
        right: 0,
        maxWidth: "500px",
      }}
    >
      {error}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          setToggle(!toggle);
        }}
      ></button>
    </div>
  );
}

export default AlertComponent;
