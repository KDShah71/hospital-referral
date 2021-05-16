import React from "react";

const CheckIcu = ({ icu, state }) => {
  return (
    <div className="d-flex flex-column align-items-start">
      <div>
        <span className="p-14 text-black-50 me-2">ICU </span>
        <span
          className={`px-3 mx-2 py-1 badge  ${
            state ? "bg-success" : "bg-danger"
          } `}
        >
          {state ? "Available" : "Full"}
        </span>
      </div>
      {icu && (
        <p className="text-black-50 m-0 pt-2 d-flex justify-content-start p-12">
          updated time : {icu.updated_at.slice(11, 16)} /{" "}
          {icu.updated_at.slice(0, 10)}
        </p>
      )}
    </div>
  );
};

export default CheckIcu;
